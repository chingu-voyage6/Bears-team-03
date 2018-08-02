const Expense = require('../models/Expense');
const moment = require('moment')
const presentMonth = moment().format('YYYYMMDD').slice(0,6)


module.exports = {
     createExpense(body){
       return new Expense(
        { 
          date: `${body.date}`,
          name: `${body.name}`,
          paidWith: `${body.paidWith}`,
          amount: `${body.amount}`,
          category: `${body.category}`,
          user:`${body.user}`
        }
       ).save()
         .then(response => response)
         .catch(e => {throw e})
     },

}