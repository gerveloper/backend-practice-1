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

    
    res.send( req.body )
})


app.listen(4000)