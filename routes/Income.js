const Router = require('express').Router()
const passport = require('passport')

const Income = require('../models/Income')

const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })

// Add an income
Router.post('/create', requireAuth, (req, res, next) => {
let income = new Income({
  name: req.body.name,
  amount: req.body.amount,
  frequency: req.body.frequency,
  color: req.body.color,
  user: req.user._id
})

Income.createIncome(income, (err, expense) => {
  if(err) { return next(err)}
  res.json({ success: true, income })
})
})

module.exports = Router