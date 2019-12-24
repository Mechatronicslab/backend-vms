const bmkg = require('bmkg')

exports.getWeather = async (kota) => {
  console.log(kota)
  let cuaca = await bmkg.weather.single(18)
  const cuacaTanggamus = Array.from(cuaca.area).filter(res => {
    return res.meta.name === kota
  }).map(res => {
    return Object.assign(res.meta, {
      humidity: filterValueByTime(res.humidity.values).value + filterValueByTime(res.humidity.values).unit,
      temperature: filterValueByTime(res.temperature.values).values[0].value + ' ' + filterValueByTime(res.temperature.values).values[0].unit,
      weather: filterValueByTime(res.weather.values).value.description.id,
      windDirection: filterAngin(res.windDirection.values),
      windSpeed: filterAngin(res.windSpeed.values)
    })
  })[0]
  return cuacaTanggamus
}

const filterValueByTime = (arr) => {
  let jamSekarang = new Date().getHours()
  let kodeJam = getKode(jamSekarang)
  
  return Array.from(arr).filter(res => {
    return res.hour === kodeJam
  })[0]
}

const filterAngin = (arr) => {
  let jamSekarang = new Date().getHours()
  let kodeJam = getKode(jamSekarang)
  if (kodeJam === 0) {
    return arr[0]
  } else if (kodeJam === 6) {
    return arr[1]
  } else if (kodeJam === 12) {
    return arr[2]
  } else {
    return arr[3]
  }
}

const getKode = (jamSekarang) => {
  if (jamSekarang <= 6) {
    return 0
  } else if (jamSekarang <= 12) {
    return 6
  } else if (jamSekarang <= 18) {
    return 12
  } else {
    return 18
  }
}
