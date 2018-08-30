const Model = require('../models')
const Trip = Model.Trip

class Controller {
    
    static list(req,res){
        return Trip.findAll({

        })
        .then(data =>{
            if (!data) { 
                return res.status(400).json({
                    status: 400,
                    message: 'data tidak ada', 
                    data: data 
                })
            }
            res.render('homepage',{err : null ,data :data})
        })
        .catch(err =>{
            console.log(error)
            return res.status(400).json({
                message: 'data tidak ditemukan', 
                data: error
            })
        })
    }

}

module.exports = Controller