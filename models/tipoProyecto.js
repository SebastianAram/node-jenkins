const { Schema, model } = require('mongoose')
const TipoProyectoSchema = Schema(
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

module.exports = model('TipoProyecto', TipoProyectoSchema)