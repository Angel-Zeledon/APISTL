const jwt = require('jsonwebtoken')

const generartoken = (uid = '') => {

    return new Promise((resolve, reject) => {
        let payload = { uid }

        jwt.sign(payload, process.env.SECRET_KEY_JWT, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err)
                reject('No se pudo generar el token')
            } else {
                resolve('token generado:', token)
            }
        })
    })

}
module.exports = {
    generartoken
}