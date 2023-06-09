const { Sequelize } = require('sequelize')

const { config } = require('../config')

const sequelize = new Sequelize(config.MYSQL_URL)

sequelize.authenticate().then(() => console.log("[DATABASE] Database is connected"))

module.exports = { sequelize }
