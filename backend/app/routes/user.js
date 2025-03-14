const { Router } = require('express')
const userController = require('../controllers/user')

const route = Router()

route.post('/login', userController.login)
route.post('/register', userController.register)

module.exports = route