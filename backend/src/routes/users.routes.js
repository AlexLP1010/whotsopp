const express = require('express')
const userController = require('../controllers/users.controller.js')
const { authorize } = require('../helpers/autho.js')

const route = express.Router()

route.get('/', (req, res) => {
  userController.getUsersList()
  .then(data => res.json(data))
  .catch(() => res.sendStatus(500))
})

route.get('/me', authorize, (req, res) => {
  userController.getMe(req.headers.payload)
  .then(data => res.json(data))
  .catch(() => res.sendStatus(500))
})

route.post('/login', (req, res) => {
  console.log(req.body)
  const { user_name, password } = req.body
  userController.login(user_name, password)
    .then(token => {
      res.json({token})
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

module.exports = route