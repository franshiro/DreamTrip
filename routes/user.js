const Routes = require('express').Router()
const Controller  = require('../controller/controller')

Routes.get('/', (req, res) => {
    res.send('route ini siap digunakan')
})


module.exports = Routes