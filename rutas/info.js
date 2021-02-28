const Info = require('../models/info')
const express = require('express')
const app = express()

app.get('/informacion/:materia/:grado', async(req, res) => {

    let { materia, grado } = req.params
    let resumenes = await Info.find({ materia, grado })
    if (!resumenes) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No hay tareas'
        })
    }
    resumenes.push('.')
    if (resumenes[0] == '.') {
        return res.status(400).json({
            mensaje: 'No hay tareas'
        })

    }
    console.log(resumenes)
    res.json({
        ok: true,
        resumenes
    })
})
app.post('/agregar', async(req, res) => {
    let { titulo, infor, materia, grado, profesor, fecha } = req.body
    let info = new Info({ titulo, infor, materia, grado, profesor, fecha })

    console.log('Resumen:', info)
    await info.save()


    res.json({
        tareas: info
    })

})
module.exports = app