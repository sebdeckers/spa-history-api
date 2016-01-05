var Router = require('spa-quick-router')

var router = new Router({
  '/about': {
    title: 'About Us',
    element: '#about'
  },
  '/shop': {
    title: 'SG50 Shop',
    element: '#products'
  },
  '/': {
    title: 'Homepage',
    element: '#landing'
  },
  '': {
    element: '#error404'
  }
})
