const { Router } = require("express");

const usersRoutes = require('./users.routes')
const snacksRoutes = require('./snacks.routes')

const routes = Router()

// Rotas dos controllers
routes.use('/users', usersRoutes)

routes.use('/snacks', snacksRoutes)

module.exports = routes