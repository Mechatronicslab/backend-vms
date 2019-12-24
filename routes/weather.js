const router = require('express').Router()
const weatherController = require('../controller/weather')

router.get('/get/:kota', (req, res) => {
  weatherController.getWeather(req.params.kota).then(result => {
    res.json(result)
  })
})

module.exports = router
