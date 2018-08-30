const Model = require('../models')
const User = Model.User
const Trip = Model.Trip

class Controller {
    static createUser(req, res){
        User.create(req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static loginUser(req,res){
        User.findOne({
            where : {
                username : req.body.username,
                password : req.body.password
            }
        })
        .then(showUsers => {
            res.render('homepage', {showUsers})
        })
        .catch(err => {
            res.send(err)
        })
    }
    
    static tripGetId(req, res){
        User.findById(req.params.id)
        .then(getId => {
            res.render('tripAdd', {getId})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static tripCreate(req, res){
        Trip.create({
            title : req.body.title,
            location : req.body.location,
            date : req.body.date,
            meet_point : req.body.meet_point,
            cost : req.body.cost,
            max : req.body.max,
            user_id : req.params.id
        })
        .then(() => {
            // res.render('homepage', {getId : req.params.id})
            User.findById(req.params.id)
            .then(showUsers => {
                // res.render('homepage', {showUsers})
                Trip.findAll()
                .then(showTrips => {
                    res.render('homepage', {showUsers, showTrips})
                })
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller