const {Schema, model} = require('mongoose')
const ProyectoSchema = Schema(
    {
        numero: {
            type: Number,
            required: [true, 'Numero Requerido'],
            unique: [true, 'Numero ya existe']
        },
        titulo: {
            type: String,
            required: [true, 'Titulo Requerido']
        },
        fechaini: {
            type: Date,
            required: [true, 'Fecha de iniciacion Requerida']
        },
        fechaentrega: {
            type: Date,
            required: [true, 'Fecha de entrega Requerida']
        },
        valor: {
            type: String,
            required: [true, 'Valor Requerido']
        },
        fechacreacion: {
            type: Date,
            default: new Date()
        },
        fechaactualizacion: {
            type: Date,
            default: new Date()
        },
        cliente: {
            type: Schema.Types.ObjectId,
            ref: 'Cliente',
            required: true
        },
        tipoProyecto: {
            type: Schema.Types.ObjectId,
            ref: 'TipoProyecto',
            required: true
        },
        universidad: {
            type: Schema.Types.ObjectId,
            ref: 'Universidad',
            required: true
        },
        etapa: {
            type: Schema.Types.ObjectId,
            ref: 'Etapa',
            required: true
        }
    }
)

module.exports = model('Proyecto', ProyectoSchema)