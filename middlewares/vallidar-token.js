const jwt = require('jsonwebtoken')
const { request, response } = require('express')
const Usuario = require('../models/user')


const ValidarToken = async(req = request, res = response, next) => {
    let token = req.header('token')

    if (!token) {
        return res.status(401).json({
            mensaje: 'No existe un token'
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY_JWT);
        let usuario = await Usuario.findOne(uid)

        if (!usuario) {
            return res.status(400).json({
                mensaje: 'token no existe en db'
            })
        }

        req.usuario = usuario

        next()



    } catch (err) {
        console.log(err)
        return res.status(400).json({
            mensaje: 'No se pudo validar el token'
        })

    }
}
module.exports = {
    ValidarToken
}