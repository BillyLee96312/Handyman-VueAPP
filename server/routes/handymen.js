var express = require('express')
var router = express.Router()
const database = require('../database')


// Create new customer (HomeOwner)
// This is a post request api. Front end will use this api to create new homeowner.
// Once user is inserted into database it will return newly created user to frontend
router.post('/add', (req, res) => {
  let data = req.body
  let userID = data.userID
  let firstName = data.firstName
  let lastName = data.lastName
  let phoneNum = data.phoneNum
  let workArea = req.body.workArea
  console.log(data)
  let query = `INSERT INTO handyman (user_id, first_name, last_name, phone_num, work_avaliable_area) VALUES ('${userID}', '${firstName}', '${lastName}', ${phoneNum}, ${workArea})`
  console.log(query, data)
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


// Edit a HandyMan
// This is a Edit request api. Front end will use this api to eidt a handyman.
// Once handyman is updated into database it will return updated handyman to frontend
router.put('/edit/:id', (req, res) => {
  let data = {
    first_name : req.body.firstName,
    last_name : req.body.lastName,
    phone_num : req.body.phoneNum,
    work_avaliable_area : req.body.workArea
  }
  console.log(data)
  let query = 'UPDATE handyman SET ? WHERE handyman_id = ' + req.params.id
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


// Get all handymen
// This will api will return call handymen from database
router.get('/', (req, res) => {
/*
  let query = 'select hm.handyman_id, sv.service_name, hm.first_name, hm.last_name, hm.phone_num, ' +
                  'ha.skill_license_no, sk.skill_name, sk.skill_desc, work_avaliable_area ' +
                'from service sv ' +
                  'join skill sk on sv.service_id = sk.service_id ' +
                  'join handyman_ability ha on ha.ability_skill_id = sk.skill_id ' +
                  'join handyman hm on hm.handyman_id = ha.handyman_id '
*/
  let query = 'SELECT * FROM handyman'  
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


// Get a handyman
// This will api will return call handyman from database
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  let query = 'SELECT * FROM handyman where handyman_id = ' + req.params.id
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
