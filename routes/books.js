const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/',(req,res,next) => {
  queries.listBooks()
    .then(book => {
      res.json({book})
    })
    .catch(next)
})


module.exports = router