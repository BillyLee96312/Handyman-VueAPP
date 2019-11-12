const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const database = require('./database')

// API
// API for users
var usersRouter = require('./routes/users')
// API for user_types
var userTypesRouter = require('./routes/userTypes')
// API for customer
var customersRouter = require('./routes/customers')
// API for address
var addressessRouter = require('./routes/addresses')
// API for skills
var skillsRouter = require('./routes/skills')
// API for handymen
var handymenRouter = require('./routes/handymen')
// API for handyman abilities
var handymanAbilitiesRouter = require('./routes/handymanAbilities')
// API for services
const serviceRouter = require('./routes/services')
// API for search handyman
const searchHandyman = require('./routes/searchHandyman')

const app = express()

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`listening on ${port}`)
})
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

// request api return from database
// request api for user
app.use('/api/v1/json/users', usersRouter)
// request api for user_type
app.use('/api/v1/json/userTypes', userTypesRouter)
// request api for customer
app.use('/api/v1/json/customers', customersRouter)
// request api for addresser
app.use('/api/v1/json/addresses', addressessRouter)
// request api for skill
app.use('/api/v1/json/skills', skillsRouter)
// request api for handyman
app.use('/api/v1/json/handymen', handymenRouter)
// request api for handymanAbilities
app.use('/api/v1/json/handymanAbilities', handymanAbilitiesRouter)
// request api for services
app.use('/api/v1/json/services', serviceRouter)
// request api for search handyman
app.use('/api/v1/json/searchHandyman', searchHandyman)
