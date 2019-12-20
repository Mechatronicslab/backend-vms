const router = require('express').Router()
const weatherController = require('../controller/earthquake')

router.get('/get', (req, res) => {
  weatherController.getEarthquake().then(result => {
    res.json(result)
  })
})

module.exports = router
