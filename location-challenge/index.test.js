const assert = require('assert')
const filterLocation = require('./')

const array = [
  {
    organization: 'Name of Org',
    offices: [
      {
        address: 'Some address',
        coordinates: '51.10, 55.98'
      }
    ]
  },
  {
    organization: 'Name of Org',
    offices: [
      {
        address: 'Some address',
        coordinates: '51.10, 55.98'
      }
    ]
  }
]

const expected = filterLocation(array)

assert(expected !== array, 'filterLocation should not return original array')
// const expected = calculateDistance(-66.55, 44.44, 33.43, -0.89)

// assert(!isNaN(expected), 'calculateDistance returns a number')

// const person = {
//   name: 'Joe',
//   age: 21,
//   address: { city: 'Los Angeles', country: 'USA' }
// }
//
// const expected = deepClone(person)
//
// assert(expected !== person, 'deepClone makes a deep clone')
//
// assert(expected.address !== person.address, 'deepClone makes a deep clone')
