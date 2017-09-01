const person = {
  name: 'Paddy',
  address: {
    town: 'Lerum',
    country: 'Sweden'
  }
}

function deepClone(object) {
  var clone = {}
  clone = JSON.parse(JSON.stringify(object))
  return clone
}

const clone = deepClone(person)
console.log(person, clone)

module.exports = deepClone
