const mongoose = require('mongoose')

let User = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'El email es requerido']
    },
    contra: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    role: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('User', User)