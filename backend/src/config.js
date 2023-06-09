const conf = require('dotenv')
conf.config()

const config = {
  PORT: process.env.PORT || 3000,
  MYSQL_URL: process.env.MYSQL_URL,
  JWT_SECRET: process.env.JWT_SECRET
}

module.exports = { config }
