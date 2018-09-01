const Model = require('../models')
const Trip = Model.Trip
const User = Model.User
const TripUser = Model.TripUser

class Controller {

    static filterTrip(req,res){
        Trip.findAll({
            where : {
                location : req.body.filterLocation
            }
        })
        .then(data =>{
            Trip.findAll()
            .then(userdata=>{
                
                res.render('dreamtrip',{userdata,data})
            })
            
        })
        .catch(err =>{
            res.send(err)  
        })
    }
    
    static list(req,res){
        // res.send(req.session.user)
        // User.findOne({
        //     where : { username : req.session.user.name}
        // })
        // .then(userdata =>{
        //     // res.render('dreamtrip',{err : null ,data :data})
        //     // console.log(req.body)
        //     Trip.findAll()
        //     .then(data => {
        //         res.render('dreamtrip', {data, userdata})
        //     })
        // })
        Trip.findAll()
        .then(data => {
            res.render('dreamtrip', {data, userdata : req.session.user.user_id})
        })
        .catch(err =>{
            res.send(err)  
        })
    }
    

    static addTrip(req,res){
        return Trip.create(req.body)
        .then(() => {
            res.redirect('/trip')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showEditTrip(req,res){
        Trip.findById(req.params.id)
        .then(data => {
            res.render('editTrip',{err : null ,data :data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editTrip(req,res){
        return Trip.update(req.body,{
            where : {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/trip')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static deleteTrip(req,res){
        return Trip.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(data=>{
            res.redirect('/trip')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static tripDetail(req,res){
        // return Trip.findById(req.params.id)
        // .then(data => {
        //     // res.render('detailTrip',{err : null ,data :data})
        //     User.findAll()
        //     .then(users =>{
        //         res.render('detailTrip',{err : null ,data :data, users :users})  
        //     })
        // })
        // .catch(err=>{
        //     res.send(err)
        // })
        Trip.findById(req.params.id)
        .then(data => {
            // res.render('detailTrip', {data})
            User.findAll({
                include : [{
                    model : TripUser,
                    where : { trip_id :req.params.id },
                    include : [{
                        model : Trip
                    }]
                }]
            })
            .then(users => {
                res.render('detailTrip', {data, users, session : req.session.user.user_id})
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static joinTrip(req, res){
        TripUser.create({
            user_id : req.session.user.user_id,
            trip_id : req.params.id,
            status : 'join'
        })
        .then(() => {
            res.redirect('/trip')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller