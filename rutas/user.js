const express = require('express')
const app = express()
const User = require('../models/user')

app.post('/login', async(req, res) => {
    const { correo, contra } = req.body

    let user = await User.findOne({ email: correo, contra: contra })

    if (!user) {
        return res.status(400).json({
            mensaje: 'Usuario no existe'
        })
    }

    res.json({
        user
    })


})
app.post('/simple', async(req, res) => {
    const { correo, contra, rol } = req.body
    let user = new User({ correo, contra, rol })

    await user.save()
    res.json({
        correo: user.correo,
        contraseña: user.contra,
        rol: user.rol
    })

})
module.exports = app