const { Router } = require('express')

// Existo todo o código com o Prisma
const UsersController = require('../controllers/UsersController')

// instancio as rotas com o arquivo do usuário
const userRoutes = Router()

// instanciando o Controller do Usuário
const usersController = new UsersController()

// Rotas - Users ('/users/create')
userRoutes.post('/create', usersController.create)
userRoutes.put('/update', usersController.update)
userRoutes.get('/', usersController.findMany)
userRoutes.get('/findUnique', usersController.findUnique)
userRoutes.delete('/delete', usersController.delete)

module.exports = userRoutes
