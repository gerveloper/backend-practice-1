const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/backend_practice_1', {useNewUrlParser: true, useUnifiedTopology: true});
const authRouter = require('./src/routes/auth')
const categoriesRouter = require('./src/routes/categories')
const addressesRouter = require('./src/routes/addresses')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/auth', authRouter)
app.use('/categories', categoriesRouter)
app.use('/addresses', addressesRouter)


app.get('/', function (req, res) {
    res.send('Bienvenido a backend')

})





app.listen(4000)