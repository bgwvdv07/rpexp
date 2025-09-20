// index.js

const express = require('express');
const compression = require('compression');
const path = require('path');
const serverless = require('serverless-http');
const cors = require('cors');
const dotenv = require("dotenv");
const sassMiddleware = require('sass-middleware');
const { reviewsInterceptor, reviewsMiddleware } = require('./public/js/reviewsMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─── Middleware ─────────────────────────────────────────────────────────────
app.use(cors());
app.use(compression());
// Inject schema with cached Yelp reviews
app.use(reviewsInterceptor());

app.use(reviewsMiddleware);

app.get('/test-reviews', (req, res) => {
  res.json({
    aggregate: res.locals.aggregate,
    reviews: res.locals.reviews
  });
});


app.get('/', (req, res) => {
  res.render('index', { reviews: res.locals.reviews, aggregate: res.locals.aggregate });

});

// Compile SCSS → CSS on the fly
const srcPath = path.join(__dirname, 'public', 'scss');
const destPath = path.join(__dirname, 'public', 'css');

app.use(
  '/css',
  sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: process.env.NODE_ENV !== 'production', // Only log in dev
    outputStyle: 'compressed',
  })
);

// Serve static files with caching
app.use(
  express.static('public', {
    maxAge: '1d',
    etag: false,
  })
);




// ─── Page Routes ────────────────────────────────────────────────────────────

const pages = [
  
  'contact',
  'services',
  'about',
  'garden-installation',
  'gardening',
  'irrigation-systems',
  'fence-gate-installation',
  'landscape-design',
  'tree-shrubs',
];

pages.forEach((page) => {
  const route = page === '' ? '/' : `/${page}`;
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', `${page}.html`));
  });
});
 

// Example API endpoint to expose reviews as JSON (optional)
app.get('/api/reviews', (req, res) => {
  res.json(res.locals.reviews);
});

// ─── Special Files ──────────────────────────────────────────────────────────
app.get('/sitemap.xml', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'))
);
app.get('/robots.txt', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'))
);

// ─── 404 Catch-All ──────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});



// ─── Run Locally or Export for Serverless ───────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Local server running at http://localhost:${PORT}`);
  });
} else {
  module.exports.handler = serverless(app);
}

if (process.env.NODE_ENV !== 'production') {
  // Dev: serve raw CSS
  app.use('/css', express.static(path.join(__dirname, 'public/css')));
} else {
  // Prod: serve optimized CSS
  app.use('/css', express.static(path.join(__dirname, 'public/dist/css')));
}

