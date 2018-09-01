const express = require('express')
const Routes = require('./routes')
const path = require('path')
const app = express()
const Controller = require('./controller/controller')
// const bcrypt = require('bcrypt')
const authentication = require("./helper/authentication.js");

app.set('view engine', 'ejs')

var session = require('express-session')
app.use(session({
    key: 'key_user',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

app.use(express.urlencoded({ extended : false }))
app.use(express.static(path.join(__dirname + '/public')))
app.use('/', Routes)

app.listen(3000, () => console.log('app listen in port 3000'))