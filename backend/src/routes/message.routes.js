const express = require('express')
const messageController = require('../controllers/message.controler.js')
const { authorize } = require('../helpers/autho.js')

const route = express.Router()

route.get('/:chatId', authorize, (req, res) => {
  const { chatId } = req.params
  messageController.getMessages(chatId)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500))
})

route.post('/:chatId', authorize, (req, res) => {
  const { message } = req.body
  const { chatId } = req.params
  messageController.sendMessage(chatId, req.headers.payload.id, message)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500))
})

module.exports = route