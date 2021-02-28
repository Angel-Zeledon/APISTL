const mongoose = require('mongoose')


let Info = mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'Se requiere el titulo']
    },
    infor: {
        type: String,
        required: [true, 'Se requiere la informacion']
    },
    materia: {
        type: String,
        required: [true, 'Se requiere la materia']
    },
    grado: {
        type: String,
        required: [true, 'Se requiere grado'],
        enums: ['7', '8', '9', '10', '11']
    },
    profesor: {
        type: String,
        required: [true, 'El nombre del profesor es necesario']

    },
    fecha: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Info', Info);