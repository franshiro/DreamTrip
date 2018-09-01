const Routes = require('express').Router()
const controller = require('../controller')
const auth = require('../helper/authentication')


Routes.get('/',auth, controller.Trip.list)

Routes.post('/add', controller.Trip.addTrip)

Routes.post('/:id/join', controller.Trip.joinTrip)

Routes.get('/:id/edit', controller.Trip.showEditTrip)
Routes.post('/:id/edit', controller.Trip.editTrip)
Routes.get('/:id/delete', controller.Trip.deleteTrip)

Routes.post('/filter', controller.Trip.filterTrip)

Routes.get('/:id', controller.Trip.tripDetail)

module.exports = Routes