const express = require('express')
const userRoute = require('./users.routes.js')
const chatRoute = require('./chat.routes.js')
const messageRoute = require('./message.routes.js')

const route = express.Router()

route.use('/user', userRoute)
route.use('/chat', chatRoute)
route.use('/message', messageRoute)

module.exports = route