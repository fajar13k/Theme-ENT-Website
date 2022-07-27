
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./agree.cjs.production.min.js')
} else {
  module.exports = require('./agree.cjs.development.js')
}
