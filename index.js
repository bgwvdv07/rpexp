const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();



require('dotenv').config();

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static(__dirname + '/public'));








var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS,
     type: 'OAuth2',
     clientId: '478240378195-p6v56co0h3i0rgb3lfjqsvgctfhioopo.apps.googleusercontent.com',
     clientSecret: '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',
     refreshToken: '1//04oQW_qZAscB7CgYIARAAGAQSNwF-L9IrsLz_V2ME-toh7QjqShYiAXwNwM3rb8L00qfy6BXxBk-_LgtnO5N8b7d8Ntd7PcHa-mM'
     },

    
});




app.post('/contact', upload.none(), function(req, res) {



    const {body} = req
    
    let currentTime = new Date();



    let mailOptions = {
        from: 'davidaragon97@gmail.com',
        to: "johnreppard@yahoo.com",
        bcc: "davidaragon97@gmail.com",
        subject: 'Request ',
        text: `${body.Name} from ${body.Email}
         on ${currentTime}
          has stated the following: 
          ${body.Message}` ,
  };


    
    
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email.');
          } else {
            console.log('Email sent: ' + info.response);
           /*return res.status(200).send('Email sent successfully!');*/
           return res.status(200).redirect("/contact");
          }
        });
    /**/
});



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

app.get('/sitemap.xml', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/sitemap.xml'))
})

app.get('*', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/404.html'))
})

app.get('/robots.txt', function(req, reply) {
    reply.sendFile(path.join(__dirname + '/public/robots.txt'))
})

app.get('/contact', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/contact.html'))
})

app.get('/privacy-policy', function (req, reply) {
    res.sendFile('/public/privacy-policy.html', {root: __dirname })
})
app.get('/termsofservice', function (req, reply) {
    res.sendFile('/public/termsofservice.html', {root: __dirname })
})

module.exports.handler = serverless(app);

 /*app.listen(PORT, () => {
  console.log('port 3000')
})*/
  
