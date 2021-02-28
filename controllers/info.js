const { response, request } = require('express')
const Info = require('../models/info').default

const appGet = async(req = request, res = response) => {
    const { grado, materia } = req.params

    let tareas = await Info.find({ materia: materia, grado: grado })

    if (!tareas) {
        res.status(400).json({
            mensaje: 'no existen tareas'
        })
    }

    res.json({
        tareas
    })



}

const appPost = async(req = request, res = response) => {

    let { profesor, titulo, materia, grado, infor, fecha } = req.body

    let info = new Info({
        profesor,
        titulo,
        materia,
        grado,
        infor,
        fecha
    })
    await info.save()
    res.json({
        info
    })

}

module.exports = {
    appGet,
    appPost
}