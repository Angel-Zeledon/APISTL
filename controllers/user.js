const { request, response } = require('express')
const User = require('../models/user')

const userPost = async(req = request, res = response) => {
    const { email, contra } = req.body

    let user = await User.find({ email: email, contra: contra })

    if (!user) {
        return res.status(400).json({
            mensaje: 'Usuario no existe'
        })
    }

    res.json({
        user
    })


}

module.exports = {
    userPost
}