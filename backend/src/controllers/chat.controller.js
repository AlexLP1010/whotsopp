const { Chat } = require('../db/models/chat.model.js')
const { Users } = require('../db/models/user.model.js')

/**
 * Creates a new chat
 * @param {string} name Name of chat
 * @param {string[]} users List of users that participates in the 
 * new chat
 */
async function createChat(name, users) {
  const newChat = await Chat.create({ name })

  for (const idx in users) {
    const userFound = await Users.findOne({ where: { user_name: users[idx] } })
    newChat.addUsers(userFound)
  }

  return newChat
}

async function getChats(userId) {
  const users = await Users.findOne({ where: { id: userId }, include: Chat })
  return users.chats
}

module.exports = { createChat, getChats }