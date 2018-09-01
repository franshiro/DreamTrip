const Routes = require('express').Router()
const Controller  = require('../controller/user')
const auth = require('../helper/authentication')


Routes.get('/',auth, Controller.userList)




module.exports = Routes