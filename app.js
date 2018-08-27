const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())


app.get('/', (req,res,next) => {  
  res.json({
    message: 'Hello Tacos!'
  }); 
})


module.exports = app;