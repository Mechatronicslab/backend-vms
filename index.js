const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5005
const bodyParser = require('body-parser')
const db = require('./config/dbConfig')
app.use(cors())
// app.use(middleware())
app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))
app.use(bodyParser.urlencoded({
  extended:true,
  limit: '50mb'
}))

db.connectToDb

// list route
app.use('/weather', require('./routes/weather'))
app.use('/earthquake', require('./routes/earthquake'))

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
