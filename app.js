const express = require('express')
const app = express()
const path = require('path')
//const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const md5 = require('md5')
const User = require('./src/schemas/User')



app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', function (req, res) {
    res.send('Bienvenido a backend')

})


app.get('/register', function (req, res) {

    let file = path.resolve('src', 'views', 'register.html')
    
    res.sendFile(file)

})


app.get('/confirm', function (req, res) {

  let user = User.findByToken(req.query)
  
  res.send(user)
})


app.post('/register', async function (req, res) {

  let user = new User(req.body)

  user.save()
    .then(async u => {

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

       
    let info = await transporter.sendMail({
      from: '"Backend practice project" <no-reply@example.com>',
      to: "you@example.com, andyou2@example.com",
      subject: "(This is a test) Your registration has been successful",
      text: "I hope this email finds you well. Thank you for getting this far!",
      html: `
          <a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
            Confirmar cuenta
          </a>
          <b>I hope this email finds you well. Thank you for getting this far!</b>"
      `,
    });


        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.send(nodemailer.getTestMessageUrl(info))

    })
    .catch(err => {
      console.log(err)
    })

    
})


app.listen(4000)