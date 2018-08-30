const Model = require('../models')
const User = Model.User
const Trip = Model.Trip

class Controller {
    static createUser(req, res){
        User.create(req.body)
        .then(() => {
            res.redirect('/login')
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
            // res.render('homepage', {showUsers})
            Trip.findAll({
                where : { user_id : showUsers.id}
            })
            .then(showTrips => {
                res.render('homepage', {showUsers, showTrips})
            })

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
            res.redirect('/login')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static userTripDelete(req, res){
        Trip.destroy({
            where : { id : req.params.id}
        })
        .then(() => {
           res.redirect('/login')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static tripEditGetId(req,res) {
        Trip.findById(req.params.id)
        .then(getId => {
            res.render('tripEdit', {getId})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static tripUpdatebyId(req, res){
        Trip.update(req.body, {
            where : {id : req.params.id}
        })
        .then(() => {
            res.redirect('/login')
        })
        .catch(err => res.send(err))
    }
}

module.exports = Controller