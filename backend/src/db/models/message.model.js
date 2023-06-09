const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../index.js')

class Message extends Model { }

Message.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT('tiny'),
    allowNull: true
  }
}, { sequelize, modelName: 'message', timestamps: false })

module.exports = { Message }