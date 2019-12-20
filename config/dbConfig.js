const mongoose = require('mongoose')
// const mongoURL = 'mongodb://detacare_event:dc_event098@dbmongo.server.pptik.id:27017/detacare_event?readPreference=secondary'
const mongoURL = 'mongodb://127.0.0.1:27017/vms'

exports.connectToDb = mongoose.connect(mongoURL,{
  useCreateIndex: true,
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(() => console.log('connect mongodb'))
.catch(err => console.log('failed to connect' + err))
