const { Users } = require('../db/models/user.model.js')
const { signToken } = require('../helpers/autho.js')

async function getUsersList() {
  const result = await Users.findAll({
    attributes: ['user_name', 'name']
  })
  return result
}

async function getMe(payload) {
  const id = payload.id
  const me = await Users.findByPk(id)
  return me
}

/**
 * 
 * @param {string} user_name 
 * @param {string} password 
 * @returns Sign token if user_name exists and 
 * password match
 */
async function login(user_name, password) {
  const user = await Users.findOne({ where: { user_name } })
  if (!user)
    throw new Error('User not found')
  if (user.password !== password)
    throw new Error('Passwords not match')
  return signToken({ user_name, id: user.id })
}

module.exports = { getUsersList, login, getMe }