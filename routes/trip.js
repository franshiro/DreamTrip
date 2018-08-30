const Routes = require('express').Router()
const Controller = require('../controller/controller')

Routes.get('/', (req, res) => {
    res.send('route ini siap digunakan')
})

Routes.get('/:id/add', Controller.tripGetId)
Routes.post('/:id/add', Controller.tripCreate)


module.exports = Routes