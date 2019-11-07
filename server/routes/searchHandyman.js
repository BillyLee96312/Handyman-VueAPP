var express = require('express')
var router = express.Router()
const database = require('../database')

// Search for Handyman
// This API will retrun Handyman list based on selected filters
router.post('/', (req, res) => {
    let data = req.body.searchFilters

    console.log('abby obj ' + req.body.searchFilters)

    // TODO: Include skills in filter search
    database.query('SELECT user.user_name FROM user, address WHERE user.user_type = "2" AND address.postal_code = "' + data.pcode + '"')
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
