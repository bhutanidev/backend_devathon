const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },password:{
        type:String
    },imageurl:{
        type:String
    }
})

const model = mongoose.model('hotels',hotelSchema)
module.exports = model