const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/', function (req, res) {
    res.send('Bienvenido a backend')

})


app.get('/register', function (req, res) {

    let file = path.resolve('src', 'views', 'register.html')
    
    res.sendFile(file)

})


app.post('/register', async function (req, res) {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });


      //async function main() {
        
        let info = await transporter.sendMail({
          from: '"Backend practice project" <no-reply@example.com>',
          to: "you@example.com, andyou2@example.com",
          subject: "(This is a test) Your registration has been successful",
          text: "I hope this email finds you well. Thank you for getting this far!",
          html: "<b>I hope this email finds you well. Thank you for getting this far!</b>",
        });


        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send( req.body )
})


app.listen(4000)