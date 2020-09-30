var property = require('./property.js');
var map = require('./map.js');

// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return map(obj, property(key));
}

module.exports = pluck;
