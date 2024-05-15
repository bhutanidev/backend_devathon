const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    //for contactingthe owner
    owner_name:{
        type:String
    },
    owner_email:{
        type:String,
        unique:true
    },
    //estimated cost
    rental_cost:{
        type:Number
    },
    //model of car
    car_name:{
        type:String
    },
    rental_location:{
        type:String
    },
    imageurl:{
        type:String
    }
})

const model = mongoose.model('cars',carSchema)
module.exports = model