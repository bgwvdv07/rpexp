
const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const cors = require('cors');
const sassMiddleware = require('node-sass-middleware');
const connect = require('connect');

require('dotenv').config();





app.use(compression());
app.use(cors());






app.use(express.static( 'public'));

const srcPath = __dirname + '/public/scss';
const destPath = __dirname + '/public/css';

app.use('/css',
    sassMiddleware({
        src: srcPath,
        dest: destPath,
        debug: true,

    })
    );


/*var smtpTransport = nodemailer.createTransport({
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
           return res.status(200).send(`<!DOCTYPE html><!--  This site was created in Webflow. https://www.webflow.com  --><!--  Last Published: Sat May 11 2024 20:34:47 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="65f14743b89cfcd9e5c48a6a" data-wf-site="65f14742b89cfcd9e5c48a1e">
<head>
  <meta charset="utf-8">
  <title>Thanks for your time - Reppard's Landscaping</title>
  <meta content="Not Found" property="og:title">
  <meta content="Not Found" property="twitter:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta content="Webflow" name="generator">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/reppard-landscape.webflow.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Work Sans:regular","Karla:regular","Work Sans:regular,500,600,700,800"]  }});</script>
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.ico" rel="icon" type="image/x-icon">
  <link href="images/favicon-16x16.png" rel="apple-touch-icon">
</head>
<body>
  <div class="utility-page-wrap">
    <div class="div-block-4">
          
        <a href="/" aria-current="page" class="navigation-item w-nav-link w--current logo-link" style="height:auto; display: flex; flex-direction: column;align-items: center; justify-content: center;" >
          
        
        <h1 id="heading" style="line-height: 60px; text-align: center;">Your message has been submitted successfully!</h1>
        <img width=150 height=150 tabindex="1" src="https://res.cloudinary.com/bay-area-rides/image/upload/v1727550079/reppardsimages/images/logojr-removebg-preview_bkzx9h.png"/>
        
      </a>
      </div>
    
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65f14742b89cfcd9e5c48a1e" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <script type="text/javascript">
    function addStyle() {
      let newBody = document.getElementsByTagName(body);
      newBody.addEventListener('DOMContentLoaded', () => {

        newBody.style.backgroundColor = 'lightblue';

      });
    }

    

  </script>
</body>
</html>`);
          
           
          }
        });
    
});
*/



app.get('/', function (req, res) {
 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
     res.header('Content-Encoding', 'gzip');
})

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/garden-installation', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'garden-installation.html'))
})

app.get('/hardscape', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'hardscape.html'))
})

app.get('/deck', function (req, res) {
    res.sendFile(path.join(__dirname, 'public','deck.html'))
})

app.get('/fence', function (req, res) {
    res.sendFile(path.join(__dirname, 'public','fence.html'))
})

app.get('/sitemap.xml', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'))
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public','404.html'))
})

app.use(function (req,res, next) {
    res.status(404).sendFile(path.join(__dirname + 'public/404.html'))
})

app.get('/robots.txt', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'robots.txt'))
})


app.get('/privacy-policy', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'))
})
app.get('/termsofservice', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'termsofservice.html'))
})








module.exports.handler = serverless(app);

/*


app.listen(PORT, () => {
  console.log('port 3000')
})
  */

