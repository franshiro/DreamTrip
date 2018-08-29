const Routes = require('express').Router()
const User = require('./user')


Routes.get('/', (req, res) => {
    res.render('login')
})

Routes.use('/homepage', User)






module.exports = Routes