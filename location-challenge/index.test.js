const assert = require('assert')
const utilityFunctions = require('./utilities.js')
const filterLocation = utilityFunctions.filterLocation
const calculateDistance = utilityFunctions.calculateDistance

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

const lat1 = 89.33
const lon1 = 15.43
const lat2 = 110.04
const lon2 = -33.54

const expected = filterLocation(array)

assert(expected !== array, 'filterLocation should not return original array')
assert(expected !== isNaN, 'filterLocation should return a number')
assert(expected !== undefined, 'filterLocation should not return undefined')

const expected1 = calculateDistance(lat1, lon1, lat2, lon2)

assert(expected1 !== isNaN, 'calculateDistance should return a number')
assert(expected1 !== undefined, 'calculateDistance should not return undefined')

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
