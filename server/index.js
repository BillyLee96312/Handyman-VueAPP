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
// API for skills
var skillsRouter = require('./routes/skills')
// API for handymen
var handymenRouter = require('./routes/handymen')
// API for handyman abilities
var handymanAbilitiesRouter = require('./routes/handymanAbilities')

const serviceRouter = require('./routes/services')

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
// request api for skill
app.use('/api/v1/json/skills', skillsRouter)
// request api for handyman
app.use('/api/v1/json/handymen', handymenRouter)
// request api for handyman
app.use('/api/v1/json/handymanabilities', handymanAbilitiesRouter)

/*
//Create new user
//This is a post request api. Front end will use this api to create new user.
//Once user is inserted into database it will return newly created user to frontend
app.post('/api/v1/json/user', (req, res) => {
  let data = req.body
  let userName = data.userName
  let password = data.password
  let email = data.email
  let userType = data.userType
  console.log(data)
  let query = `INSERT INTO user (user_name, password, email, user_type) VALUES ('${userName}', '${password}', '${email}', ${userType})`
  console.log(query)
  database.query(query)
      .then(rows => {
        database.close().then(() => {
          res.json({
            data: rows
          })
        })
      })
      .catch(err => {
        database.close().then(() => {
          res.json({
            data: err
          })
      }).catch((error) => {
            console.log(error)
             res.json({
             data: err
          })
      })
  })
})

// Get all users
// This will api will return call users from database
app.get('/api/v1/json/users', (req, res) => {
  database.query('SELECT * FROM user')
      .then(rows => {
        database.close().then(() => {
          res.json({
            data: rows
          })
        })
      })
      .catch(err => {
        database.close().then(() => {
          res.json({
            data: err
        })
      }).catch((error) => {
            console.log(error)
             res.json({
            data: err
          })
      })
  })
})
*/
// request api for services
// app.use('/api/v1/json/services', serviceRouter)
