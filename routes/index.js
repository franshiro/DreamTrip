const Routes = require('express').Router()
const User = require('./user')
const controller = require('../controller')


Routes.get('/', controller.Trip.list)






module.exports = Routes