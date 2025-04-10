const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const router = express.Router();

  


app.use(compression());

app.use(express.static(__dirname + '/public'));








router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/about.html'))
})

app.get('/garden-installation', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/garden-installation.html'))
})

app.get('/404', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/404.html'))
})

app.get('/pavers', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/pavers.html'))
})

app.get('/deck-arbor', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/deck-arbor.html'))
})

app.get('/fence', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/fence.html'))
})

app.get('/sitemap', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/sitemap.xml'))
})



//module.exports.handler = serverless(app);

app.listen(PORT, () => {
  console.log('app listening on port ${port}')
})