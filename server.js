const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
const carCtrl = require('./controllers/cars')
app.use("/",carCtrl)

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Conneced to mongoDB ${mongoose.connection.name}`)
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})



app.listen(3000)