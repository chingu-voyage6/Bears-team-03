const mongoose = require('mongoose')

const IncomeSchema = mongoose.Schema({
  name: String,
  amount: Number,
  frequency: String,
  color: String,
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
})

const Income = module.exports = mongoose.model('Income', IncomeSchema)

module.exports.createIncome = (income, callback) => {
  income.save(callback)
}