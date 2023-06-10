const express = require('express')
const chatController = require('../controllers/chat.controller.js')

const route = express.Router()

route.post('/', (req, res) => {
  const { chatName, users } = req.body
  chatController.createChat(chatName, users)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
})

module.exports = route