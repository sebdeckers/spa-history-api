var aboutView = require('./views/about')
var shopView = require('./views/shop')
var productView = require('./views/product')
var homepageView = require('./views/homepage')
var error404View = require('./views/error404')

module.exports = [
  [/^\/about$/, aboutView],
  [/^\/shop$/, shopView],
  [/^\/shop\/(.+)$/, productView],
  [/^\/$/, homepageView],
  [/^\/(.+)$/, error404View]
].map(function (pair) {
  var pattern = pair[0]
  var view = pair[1]
  return Object.assign({
    route: pattern
  }, view)
})
