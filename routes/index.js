const Routes = require('express').Router()
const trip =  require('./trip')
const user = require('./user')
const Controller = require('../controller/controller')
const auth = require('../helper/authentication')
const { Trip, User } = require('../models')

Routes.use('/trip',trip)
Routes.use('/user', user)

// Routes.get("/", function(req, res){
//     let name = "aditaja";
//     let id = 29
//     req.session.user = {
//         name :name,
//         user_id : id
//     };
//     res.redirect('/trip');
     
// });

Routes.get('/',auth, (req,res)=>{
    res.redirect('/trip')
})

Routes.get("/login",function(req, res){
    res.render('login')
})

Routes.post('/', (req,res) => {
    User.findOne({
        where : { 
            username : req.body.username,
            password : req.body.password
        }
    })
    .then(getId => {
        req.session.user = {
            name : getId.name,
            user_id : getId.id
        }
        res.redirect('/')
    })
})

Routes.get('/register', (req, res) => {
    res.render('register')
})
Routes.post('/register', Controller.createUser)


module.exports = Routes