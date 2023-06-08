const {Router} = require('express')
const router = Router()
const {
    createProyecto,
    getProyecto,
    getProyectoID,
    editProyecto,
    
} = require('../controllers/proyecto')

router.post('/', createProyecto)

router.get('/', getProyecto)

router.get('/:id', getProyectoID)

router.put('/:id', editProyecto)



module.exports = router