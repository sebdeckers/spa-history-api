import aboutView from './views/about'
// var shopView = require('./views/shop')
// var productView = require('./views/product')
import homepageView from './views/homepage'
// var error404View = require('./views/error404')

export default [
  {
    route: /^\/about$/,
    view: aboutView
  },
  // Object.assign({
  //   route: /^\/shop$/
  // }, shopView),
  // Object.assign({
  //   route: /^\/shop\/(.+)$/
  // }, productView),
  {
    route: /^\/$/,
    view: homepageView
  }
  // Object.assign({
  //   route: /^\/(.+)$/
  // }, error404View)
]
