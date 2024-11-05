const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const PORT = 3000;
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(compression());

app.use(express.static(__dirname + '/public'));

var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    host: 'mail.google.com',
    auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS,
     type: 'OAuth2',
     clientId: '478240378195-59n27i6flr3ajr7hnhm09p745kglhqro.apps.googleusercontent.com',
     clientSecret: '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',
     refreshToken: '1//04u9o399K1yQMCgYIARAAGAQSNwF-L9IrYP_B0s2gJec96rX0UqnDTUGju7rqIAfmg6UlWOe9WhY00sVr34UwqzAJIABQO71rLa0'
     },

    
}));




app.post('/send-email', function(req, res) {

    reply.sendFile(path.join(__dirname + '/public/send-email.html'));

    const output = `
    <p>You have a new contact request</p>
    <h3>contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;


    

    var mailOptions = {
        from: '"David" <davidaragon97@gmail.com>',
        to: "johnreppard@yahoo.com",
        subject: 'Request ',
        html: output
    };
    
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('message sent: ' + info.response);
    });
    res.redirect("/");
});



router.get('/', function (req, reply) {
    reply.sendFile(path.join(__dirname + '../public/index.html'));
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

app.get('/sitemap', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/sitemap.xml'))
})

app.get('/404', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/404.html'))
})

<<<<<<< HEAD
app.get('/success', function (req, reply) {
    reply.sendFile(path.join(__dirname + '/public/success.html'))
})
=======
>>>>>>> 20e6c1e3a139a29d699212ed79ee0785c410c436



module.exports.handler = serverless(app);

 /*app.listen(PORT, () => {
  console.log('port 3000')
})*/
  
