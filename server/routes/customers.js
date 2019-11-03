var express = require('express');
var router = express.Router();
const database = require('../database')
  
  // Get all customers
  // This will api will return call customer from database
  router.get('/', (req, res) => {
    let query = "SELECT * FROM customer"
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


  // Get(Find) a customer 
  // This will api will return call customer from database
  router.get('/findcustomer', (req, res) => {
    let data = req.body
    let userId = data.userId
    //let userId = 3 //data.userId
    console.log(data)
    let query = "SELECT * FROM customer where user_id = "+`${userId}`
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

  

  module.exports = router;