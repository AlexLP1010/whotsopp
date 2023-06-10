const { Message } = require('../db/models/message.model.js')

async function getMessages(chatId) {
  const foundMessages = Message.findAll({ where: { chat_id: chatId } })
  return foundMessages
}

async function sendMessage(chatId, userId, message) {
  const newMessage = await Message.create({
    message, chat_id: chatId, user_id: userId
  })
  return newMessage
}

module.exports = { sendMessage, getMessages }