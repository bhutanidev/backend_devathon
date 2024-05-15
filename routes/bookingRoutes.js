const express = require('express')
const router = express.Router()
const {getCars,getHotels,getFlights}= require('../controller/bookingController')

router.post('/hotels',getHotels)
router.get('/cars/:location',getCars)
router.post('/flights',getFlights)
module.exports= router