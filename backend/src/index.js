const express = require('express')
const cors = require('cors')
const { config } = require('./config')
const apiRoutes = require('./routes')

require('./db')
require('./db/models/index.js').setUpModels()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', apiRoutes)

app.listen(config.PORT)
