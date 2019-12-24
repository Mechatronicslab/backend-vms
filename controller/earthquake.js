const bmkg = require('bmkg')

exports.getEarthquake = async () => {
    try {
      let earthquake = await bmkg.earthquake.lastWithPotentialTsunami()
      earthquake.timestamp = convertDate(new Date(earthquake.timestamp * 1000).toLocaleDateString())
      return earthquake
    } catch (error) {
      console.log(error)
    }
  }

const convertDate = (date) => {
  const newDate = new Date(date)
  let month = '' + (newDate.getMonth() + 1)
  let listMonth = [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Desember' ]
  let tgl = '' + (newDate.getDate())
  let year = newDate.getFullYear()
  return tgl + ' ' + listMonth[month - 1] + ' ' + year
}
