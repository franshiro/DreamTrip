const Routes = require('express').Router()
const Controller  = require('../controller/controller')

Routes.get('/', (req, res) => {
    res.send('route ini siap digunakan')
})

Routes.get('/register', (req, res) => {
    res.render('register')
})
Routes.post('/register', Controller.createUser)

module.exports = Routes