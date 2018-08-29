const Routes = require('express').Router()
const Controller  = require('../controller/controller')

Routes.get('/', (req, res) => {
    res.render('register')
})
Routes.post('/', Controller.createUser)


module.exports = Routes