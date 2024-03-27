const { Router } = require('express')

// Existo todo o código com o Prisma
const UsersController = require('../controllers/UsersController')

// instancio as rotas com o arquivo do usuário
const userRoutes = Router()

// instanciando o Controller do Usuário
const usersController = new UsersController()

// Rotas - Users ('/users/create')
userRoutes.post('/create', usersController.create)

module.exports = userRoutes
// Users ('/users/')
//userRoutes.get('/',)