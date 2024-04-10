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
userRoutes.post('/login', usersController.login)

//userRoutes.get('/', usersController.findMany)
userRoutes.get('/', usersController.findMany)
userRoutes.get('/usersnack', usersController.findManyUserSnack)
userRoutes.get('/findunique', usersController.findUnique)
userRoutes.get('/countusersnacks', usersController.countUserSnacks)
userRoutes.get('/countusersnacksindiet', usersController.countUserSnacksInDiet)
userRoutes.get('/countusersnacksoutdiet', usersController.countUserSnacksOutDiet)
userRoutes.get('/bestdietsequence', usersController.countBestSequenceInDietSnacks)

userRoutes.delete('/delete', usersController.delete)



module.exports = userRoutes
