const { Schema, model } = require('mongoose')
const ClienteSchema = Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Nombre requerido'],          
        },
        email: {
            type: String,
            required: [true, 'Email requerido'],          
        },
        fechacreacion: {
            type: Date,
            default: new Date()
        },
        fechaactualizacion: {
            type: Date,
            default: new Date()
        }
    }
)

module.exports = model('Cliente', ClienteSchema)