var express = require('express')
var router = express.Router()
const database = require('../database')


// Create new request (booking)
// This is a post request api. Front end will use this api to create new request (booking).
// Once request is inserted into database it will return newly created request (booking) to frontend
router.post('/add', (req, res) => {
  let data = req.body
  let customerID = data.customerID
  let requestDate = data.requestDate
  let addressID = data.addressID
  let totalCost = data.totalCost
  let requestStatus = data.requestStatus  
  console.log(data)
  let query = `INSERT INTO request (customer_id, request_date, address_id, total_cost, request_status) VALUES (${customerID}, ${requestDate}, ${addressID}, ${totalCost}, '${requestStatus}')`
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


// Edit a request (booking)
// This is a Edit request api. Front end will use this api to eidt a request (booking).
// Once request (booking) is updated into database it will return updated a request (booking) to frontend
router.put('/edit/:id', (req, res) => {
  //let data = req.body
  let data = {
    address_id : req.addressID,
    total_cost : req.totalCost,
    request_status : req.requestStatus
  }
  console.log(data)
  let query = 'UPDATE request SET ? WHERE request_id = ' + req.params.id
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


// Delete a request (booking)
// This is a delete request api. Front end will use this api to delete a request (booking).
router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id)
    let query = 'Delete From request where request_id = ' + req.params.id
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


// Get all requests (booking)
// This will api will return call request (booking) from database
router.get('/', (req, res) => {
  let query = 'SELECT * FROM request'
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

// Get a request (booking)
// This will api will return call request (booking) from database
router.get('/:id', (req, res) => {
console.log(req.params.id)
let query = 'SELECT * FROM request where request_id = ' + req.params.id
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

module.exports = router
