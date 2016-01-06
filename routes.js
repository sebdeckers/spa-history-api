var aboutView = require('./views/about')
var shopView = require('./views/shop')
var productView = require('./views/product')
var homepageView = require('./views/homepage')
var error404View = require('./views/error404')

module.exports = [
  Object.assign({
    route: /^\/about$/
  }, aboutView),
  Object.assign({
    route: /^\/shop$/
  }, shopView),
  Object.assign({
    route: /^\/shop\/(.+)$/
  }, productView),
  Object.assign({
    route: /^\/$/
  }, homepageView),
  Object.assign({
    route: /^\/(.+)$/
  }, error404View)
]
