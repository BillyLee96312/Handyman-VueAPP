const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jwt = require('jsonwebtoken');
const config = require('./config');
const middleware = require('./middleware');

class HandlerGenerator {
  login (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({ username: username }, config.secret, { expiresIn: '24h'});
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json(
        {
          success: false,
          message: 'Authentication failed! Please check the request'
        }
      );
    }
  }
  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}
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
