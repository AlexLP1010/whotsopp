const { sequelize } = require('../index.js')
const { Users } = require('./user.model.js')
const { Chat } = require('./chat.model.js')
const { Message } = require('./message.model.js')

function setUpModels() {
  Chat.hasMany(Message, { foreignKey: 'chat_id', sourceKey: 'id' })
  Message.belongsTo(Chat, { foreignKey: 'chat_id', targetKey: 'id' })
  Users.hasMany(Message, { foreignKey: 'user_id', sourceKey: 'id' })
  Message.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'id' })
  Users.belongsToMany(Chat, { through: 'users_chats' })
  Chat.belongsToMany(Users, { through: 'users_chats' })
  sequelize.sync()
}

module.exports = { setUpModels }