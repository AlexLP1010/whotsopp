const jwt = require('jsonwebtoken')
const Express = require('express')

const { config } = require('../config.js')

/**
 * Create and sign a new token with payload
 * @param {string} payload 
 * @returns A new validated token with payload
 */
function signToken(payload){
  const newToken = jwt.sign(payload, config.JWT_SECRET)
  return newToken
}

/**
 * Valid one token
 * @param {string} token 
 * @returns Token payload or null if token is invalid
 */
function validToken(token){
  const payload = jwt.verify(token, config.JWT_SECRET)
  return payload
}

/**
 * Middleware that retrieves the token payload from the 
 * authorization header
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
function authorize(req, res, next) {
  if (!req.headers.authorization)
    res.sendStatus(400)
  const token = req.headers.authorization.replace('Bearer ', '')
  try {
    const payload = validToken(token)
    req.headers.payload = payload
  } catch (err) {
    next(new Error('Invalid token'))
  }
  next()
}

module.exports = { signToken, authorize }