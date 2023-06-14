const express = require('express')
const chatController = require('../controllers/chat.controller.js')
const { authorize } = require('../helpers/autho.js')

const route = express.Router()

route.get('/', authorize, (req, res) => {
  const { id } = req.headers.payload
  chatController.getChats(id)
    .then(data => res.json(data))
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

route.post('/', (req, res) => {
  const { chatName, users } = req.body
  chatController.createChat(chatName, users)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
})

module.exports = route