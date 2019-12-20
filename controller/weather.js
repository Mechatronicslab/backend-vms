const bmkg = require('bmkg')

exports.getWeather = async () => {
  let cuaca = await bmkg.weather.single(18)
  const cuacaTanggamus = Array.from(cuaca.area).filter(res => {
    return res.meta.name === 'Kota Agung'
  }).map(res => {
    return Object.assign(res.meta, {
      humidity: res.humidity,
      temperature: res.temperature,
      weather: res.weather,
      windDirection: res.windDirection,
      windSpeed: res.windSpeed
    })
  })
  return cuacaTanggamus
}