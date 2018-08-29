const Routes = require('express').Router()
const register = require('./register')
const login  = require('./login')

Routes.use('/login', login)
Routes.use('/register', register)

Routes.get('/', (req, res) => {
    res.render('login')
})
module.exports = Routes