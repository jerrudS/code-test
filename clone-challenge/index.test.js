const assert = require('assert')
const deepClone = require('./')

const person = {
  name: 'Joe',
  age: 21,
  address: { city: 'Los Angeles', country: 'USA' }
}

const expected = deepClone(person)

assert(expected !== person, 'deepClone should make a deep clone')

assert(expected.address !== person.address, 'deepClone should make a deep clone')
