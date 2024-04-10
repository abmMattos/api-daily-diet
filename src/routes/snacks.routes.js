const { Router } = require('express')
const verifyToken = require('../auth/authMiddleware')

const SnacksController = require('../controllers/SnacksController')

const snacksRoutes = Router()

const snacksController = new SnacksController()


snacksRoutes.post('/create', verifyToken, snacksController.create)
snacksRoutes.get('/', snacksController.findMany)
snacksRoutes.get('/findById', snacksController.findById)
snacksRoutes.put('/update', verifyToken, snacksController.update)
snacksRoutes.delete('/delete', verifyToken, snacksController.delete)

module.exports = snacksRoutes