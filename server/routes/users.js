var express = require('express')
var router = express.Router()
const database = require('../database')

// Create new user
// This is a post request api. Front end will use this api to create new user.
// Once user is inserted into database it will return newly created user to frontend
router.post('/add', (req, res) => {
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

// Edit a user
// This is a Edit request api. Front end will use this api to eidt a user.
// Once user is updated into database it will return updated user to frontend
router.put('/edit/:id', (req, res) => {
  // let data = req.body
  let data = {
    first_name: req.body.password
  }
  console.log(data)
  let query = 'UPDATE user SET ? WHERE user_id = ' + req.params.id
  database.query(query, data)
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
router.get('/', (req, res) => {
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

// Get(Find) a user for checking Login
// This will api will return call user from database
router.get('/finduser', (req, res) => {
  let data = req.body
  let userName = data.userName
  let password = data.password
  // let userName = 'ashley' //data.userName
  // let password = 'h123' //data.password
  console.log(data)
  let query = "SELECT * FROM user where user_name = '" + `${userName}` +
    "' and password = '" + `${password}` + "'"
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

// Search for Handyman
// This API will retrun Handyman list based on selected filters
router.post('/searchpostal', (req, res) => {
  let data = req.body.searchFilters

  // TODO: Include skills in filter search
  let query = 'SELECT user.user_name ' +
    'FROM user INNER JOIN address on user.user_id=address.user_id ' +
    'WHERE user.user_type = "2" AND address.postal_code="' + data.pcode + '"'

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

module.exports = router
