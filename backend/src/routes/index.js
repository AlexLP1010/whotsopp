const express = require('express')
const userRoute = require('./users.route.js')

const route = express.Router()

route.use('/user', userRoute)

module.exports = route