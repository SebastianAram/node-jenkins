const { Schema, model } = require('mongoose')
const EtapaSchema = Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Nombre requerido'],
            
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

module.exports = model('Etapa', EtapaSchema)