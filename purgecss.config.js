module.exports = {
  content: [
    '/public/**/*.html',   // scan all HTML files
    './public/js/**/*.js'   // scan client-side JS
  ],
  css: ['/public/css/**/*.css'], // your existing CSS stylesheets
  output: './public/dist/css',
  safelist: [
    'visible', /^btn/, /^nav-/, /^hero/, /^service-/ // keep dynamic classes
  ]
}

