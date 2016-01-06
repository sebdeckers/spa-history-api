import aboutView from './views/about'
import shopView from './views/shop'
import productView from './views/product'
import homepageView from './views/homepage'
import error404View from './views/error404'

export default new Map([
  [/^\/about$/, aboutView],
  [/^\/shop$/, shopView],
  [/^\/shop\/(.+)$/, productView],
  [/^\/$/, homepageView],
  [/^\/(.+)$/, error404View]
])

// And change the router
// to support Map objects.
