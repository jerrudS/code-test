const https = require('https')
const utilityFunctions = require('./utilities.js')
const filterLocation = utilityFunctions.filterLocation

const url = 'https://success.spidergap.com/partners.json?inf_contact_key=63bcaf2e5edf052bc69ffb6e9a34ff92ddf05a0e332f2096f1521d127943b21b'

https.get(url, (res) => {
  const { statusCode } = res
  const contentType = res.headers['content-type']

  if (statusCode !== 200) {
    return console.log({ error: statusCode })
  }
  else if (contentType !== 'application/json') {
    return console.log({ error: contentType })
  }
  let body = ''
  res.on('data', (chunk) => {
    body += chunk
  })
  res.on('end', () => {
    try {
      const parsed = JSON.parse(body)
      console.log(filterLocation(parsed))
    }
    catch (err) {
      console.log(err.message)
    }
  })
})
