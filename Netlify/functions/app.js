const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const router = express.Router();
app.use(compression());

app.use(express.static(__dirname + '/public'));


// app.get('/', (req, res) => {
//     res.sendFile( path.join( __dirname + "/public/index.html" ));
// });






router.get('/', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/about', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/about.html'))
})

app.get('/garden-installation', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/garden-installation.html'))
})

app.get('/pavers', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/pavers.html'))
})

app.get('/deck-arbor', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/deck-arbor.html'))
})

app.get('/fence', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/fence.html'))
})

module.exports.handler = serverless(app);
