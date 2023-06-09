const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../index.js')

class Chat extends Model { }

Chat.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'chat', timestamps: false })

module.exports = { Chat }