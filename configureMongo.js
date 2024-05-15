const mongoose = require('mongoose')

function connect_mongoose(url){
    mongoose.connect(url)
    .then(console.log("MongoDB conected"))
    .catch((err)=>console.log(err))
}

module.exports =  connect_mongoose