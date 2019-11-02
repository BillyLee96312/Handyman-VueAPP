const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const database = require('./database')
const app = express()

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`listening on ${port}`)
})
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    })
})

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
