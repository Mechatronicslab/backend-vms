const bmkg = require('bmkg')

exports.getEarthquake = async () => {
    try {
      let earthquake = await bmkg.earthquake.lastWithPotentialTsunami()
      return earthquake
    } catch (error) {
      console.log(error)
    }
  }