const deepClone = require('./deep-clone')

const person = {
  name: 'Paddy',
  address: {
    town: 'Lerum',
    country: 'Sweden'
  }
}

const clone = deepClone(person)
console.log(person, clone)
