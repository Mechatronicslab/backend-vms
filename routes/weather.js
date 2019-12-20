const router = require('express').Router()
const weatherController = require('../controller/weather')

router.get('/get', (req, res) => {
  weatherController.getWeather().then(result => {
    res.json(result)
  })
})

module.exports = router
