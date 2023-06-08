const Proyecto = require('../models/proyecto')
const {request, response} = require('express')
const Cliente = require('../models/cliente')
const Etapa = require('../models/etapa')
const Universidad = require('../models/universidad')
const TipoProyecto = require('../models/tipoProyecto')



const createProyecto = async (req = request, res = response) => {
    console.log(req.body)
    
    try{
        const data = req.body
        console.log(data)
        const {tipoProyecto, cliente, universidad, etapa} = data;
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id,
            
        })
        if(!tipoProyectoDB){
            return res.status(400).json({msg: 'Tipo proyecto Invalido'})
        }
        const clienteDB = Cliente.findOne({
            _id: cliente._id,
            
        })
        if(!clienteDB){
            return res.status(400).json({msg: 'Cliente Invalido'})
        }
        const universidadBD = Universidad.findOne({
            _id: universidad._id,
            
        })
        if(!universidadBD){
            return res.status(400).json({msg: 'Universidad Invalida'})
        }
        const etapaBD = Etapa.findOne({
            _id: etapa._id,
            
        })
        if(!etapaBD){
            return res.status(400).json({msg: 'Tipo Invalido'})
        }
        const proyectosDB = new Proyecto(data)
        
        await proyectosDB.save()
        
        return res.status(201).json(proyectosDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}


const getProyecto = async (req = request, 
    res = response) => {
        try{
            const proyectosDB = await Proyecto.find()
                .populate({
                    path: 'tipoProyecto',
                    
                })
                .populate({
                    path: 'cliente',
                    
                })
                .populate({
                    path: 'universidad',
                    
                })
                .populate({
                    path: 'etapa',
                    
                })
            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}



const getProyectoID = async (req = request, res = response) => {
    try{
        console.log(req.params)
        const id = req.params.id
        const query = {_id: id}
        const proyectoDB = await Proyecto.findOne(query)
        return res.json(proyectoDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}



const editProyecto = async (req = request, res = response) => {
    try{
        const {id} = req.params
        const data = req.body
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}



module.exports = {
    createProyecto,
    getProyecto,
    getProyectoID,
    editProyecto,
    
}