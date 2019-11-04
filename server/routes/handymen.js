var express = require('express')
var router = express.Router()
const database = require('../database')

  // Get all handymen
  // This will api will return call handymen from database
  router.get('/', (req, res) => {
    let query = 'select hm.handyman_id, sv.service_name, hm.first_name, hm.last_name, hm.phone_num, ' +
                    'ha.skill_license_no, sk.skill_name, sk.skill_desc, work_avaliable_area ' +
                  'from service sv ' +
                    'join skill sk on sv.service_id = sk.service_id ' +
                    'join handyman_ability ha on ha.ability_skill_id = sk.skill_id ' +
                    'join handyman hm on hm.handyman_id = ha.handyman_id '
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

  // Get(Find) a handyman
  // This will api will return call handyman from database
  router.get('/findhandyman', (req, res) => {
    let data = req.body
    let userId = data.userId
    // let userId = 1 //data.userId
    console.log(data)
    let query = 'SELECT * FROM handyman where user_id = ' + `${userId}`
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
