const express = require("express")
const app = express()
const connect_mongoose = require('./configureMongo')

connect_mongoose(process.env.MONGO_URL)

app.use(express.json())
app.use(express.urlencoded({extended:false}))






const PORT = 8000
app.listen(PORT,()=>console.log(`Server started on port number : ${PORT}`))