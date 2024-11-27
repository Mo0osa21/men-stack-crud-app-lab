const Car = require('../models/cars')
const router = require("express").Router()

router.get('/cars', async (req, res) => {
  const allCars = await Car.find()
  res.render('cars/index.ejs', { allCars: allCars })
})

router.get('/cars/new', (req, res) => {
  res.render('cars/new.ejs')
})

router.post('/cars', async (req, res) => {

  await Car.create(req.body)
  res.redirect('cars')
})



router.get('/cars/:carId', async (req, res) => {
  const car = await Car.findById(req.params.carId)
  res.render('cars/show.ejs', { car: car })
})

router.delete('/cars/:carId', async (req, res) => {
  await Car.findByIdAndDelete(req.params.carId)
  res.redirect('/cars')
})

router.get('/cars/:carId/edit', async (req, res) => {
  const car = await Car.findById(req.params.carId)
  res.render('cars/edit.ejs', { car: car })
})

router.put('/cars/:carId', async (req, res) => {

  await Car.findByIdAndUpdate(req.params.carId,req.body)
  res.redirect(`/cars/${req.params.carId}`)
})

module.exports= router