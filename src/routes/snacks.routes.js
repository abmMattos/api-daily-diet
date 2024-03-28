const { Router } = require('express')

const SnacksController = require('../controllers/SnacksController')

const snacksRoutes = Router()

const snacksController = new SnacksController()

snacksRoutes.post('/create', snacksController.create)

module.exports = snacksRoutes