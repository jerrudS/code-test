const lat1 = 51.515419
const lon1 = -0.141099

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const pi = Math.PI
  const φ1 = lat1 * (pi / 180)
  const φ2 = lat2 * (pi / 180)
  const Δφ = (lat2 - lat1) * (pi / 180)
  const Δλ = (lon2 - lon1) * (pi / 180)

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const distance = R * c
  return distance
}

function filterLocation(companies) {
  const companyArray = []
  companies.map(company => {
    company.offices.map(each => {
      const coordinates = each.coordinates.split(',')
      const lat2 = coordinates[0]
      const lon2 = coordinates[1]

      if (calculateDistance(lat1, lon1, lat2, lon2) <= 100) {
        const companyName = company.organization
        const address = each.address
        companyArray.push({ companyName, address })
      }
    })
  })
  const sorted = companyArray.sort(function (a, b) {
    const nameA = a.companyName.toUpperCase()
    const nameB = b.companyName.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  console.log(sorted)
  return sorted
}

module.exports = filterLocation
