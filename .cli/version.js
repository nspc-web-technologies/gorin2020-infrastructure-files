const moment = require('moment')
const version = moment().format('YYYYMMDD_HHmm')

if (require.main === module) {
  // for npm
  console.log(version)
} else {
  // for nodejs
  module.exports = version
}
