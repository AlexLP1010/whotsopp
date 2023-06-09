const express = require('express')
const { config } = require('./config')
const apiRoutes = require('./routes')

require('./db')
require('./db/models/index.js').setUpModels()

const app = express()

app.use(express.json())

app.use('/api/v1', apiRoutes)

app.listen(config.PORT)
