const express = require('express')
const app = express()

app.use(require('../rutas/info'))
app.use(require('../rutas/user'))

module.exports = app;