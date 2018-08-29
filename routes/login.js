const Routes = require('express').Router()
const Controller  = require('../controller/controller')

Routes.get('/', (req, res) => {
    res.render('login')
})
Routes.get('/homepage', Controller.loginUser)


module.exports = Routes