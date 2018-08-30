const Routes = require('express').Router()
const User = require('./user')
const Trip = require('./trip')
const Controller = require('../controller/controller')

Routes.use('/trip', Trip)
Routes.use('/user', User)


Routes.get('/', (req, res) => {
    res.render('homepage')
})




module.exports = Routes