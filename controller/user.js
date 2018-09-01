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

    static userList(req, res){
        // User.findOne({
        //     where : { username : req.session.user.name}
        // })
        // .then(userdata =>{
        //     // res.render('dreamtrip',{err : null ,data :data})
        //     // console.log(req.body)
        //     Trip.findAll({
        //         where : { user_id : userdata.id}
        //     })
        //     .then(data => {
        //         res.render('userList', {data, userdata})
        //     })
        // })
        Trip.findAll({
            where : { user_id : req.session.user.user_id}
        })
        .then(data => {
            res.render('userList', { data , userdata : req.session.user.user_id})
            console.log(req.session.user.user_id)
        })
        .catch(err =>{
            res.send(err)  
        })
    }
    // static loginUser(req,res){
    //     User.findOne({
    //         where : {
    //             username : req.body.username,
    //             password : req.body.password
    //         }
    //     })
    //     .then(showUser => {
    //             req.session.user = {
    //                 name :showUser.username,
    //                 user_id : showUser.id
    //             };
    //             res.send(req.session.user)
    //             res.redirect('/trip');

           
    //         // res.send('test dlu deh')
    //     })
    //     .catch(err => {
    //         res.send(err)
    //     })
    // }
}

module.exports = Controller