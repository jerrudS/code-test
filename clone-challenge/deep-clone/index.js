function deepClone(object) {
  var clone = {}
  clone = JSON.parse(JSON.stringify(object))
  return clone
}

module.exports = deepClone
