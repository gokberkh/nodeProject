var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: false }))

const mongoURI = 'mongodb+srv://admin:admin123@cluster0.olagr.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))



var stocks = require('./routes/Stocks')

app.use('/', stocks)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})