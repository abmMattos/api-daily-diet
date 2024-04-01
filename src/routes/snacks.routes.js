const { Router } = require('express')

const SnacksController = require('../controllers/SnacksController')

const snacksRoutes = Router()

const snacksController = new SnacksController()

snacksRoutes.post('/create', snacksController.create)
snacksRoutes.get('/', snacksController.findMany)
snacksRoutes.get('/findById', snacksController.findById)
snacksRoutes.put('/update', snacksController.update)
snacksRoutes.delete('/delete', snacksController.delete)

module.exports = snacksRoutes