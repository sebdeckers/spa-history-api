var Router = require('spa-quick-router')

var router = new Router([
  {
    route: /^\/about$/,
    title: 'About Us',
    element: '#about'
  },
  {
    route: /^\/shop$/,
    title: 'SG50 Shop',
    element: '#products'
  },
  {
    route: /^\/shop\/.+$/,
    title: 'SG50 Product Details',
    element: '#details'
  },
  {
    route: /^\/$/,
    title: 'Homepage',
    element: '#landing'
  },
  {
    route: /^\/(.+)$/,
    title: 'Page Not Found',
    element: '#error404'
  }
])
