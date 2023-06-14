const { Model } = require('sequelize')
const { sequelize } = require('../index.js')

class UsersChats extends Model { }

UsersChats.init({ }, { sequelize, modelName: 'users_chats' })

module.exports = { UsersChats }