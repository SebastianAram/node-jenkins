const { Schema, model } = require('mongoose')
const UniversidadSchema = Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Nombre requerido'],
        },
        direccion: {
            type: String,
            required: [true, 'Direccion requerida'],
        },
        telefono: {
            type: String,
            required: [true, 'Telefono requerido'],
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

module.exports = model('Universidad', UniversidadSchema)