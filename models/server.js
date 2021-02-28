const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { dbConnection } = require('../db/db')
require('dotenv').config()

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.middlewares()
        this.rutas()
        this.conectar()
        this.listen()

    }

    async conectar() {
        await dbConnection()
    }

    rutas() {
        this.app.use(require('../rutas/index'))


    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());


        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor iniciado en el puerto', this.port)
        })
    }
}

module.exports = Server