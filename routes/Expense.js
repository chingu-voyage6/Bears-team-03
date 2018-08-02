const Router = require('express').Router();
const passport = require('../Services/Passport')
const moment = require('moment')
const {createExpense,
  getAllExpenses,
  getExpenseByDate} = require('../controllers/expenses')
const Expense = require('../models/Expense')
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })
const  _ = require('lodash');


//Add an expense
Router.post('/create',requireAuth, (req, res) => {
console.log('CREATING EXPENSE')
const expense = {
     date: req.body.date,
     name: req.body.name,
     paidWith: req.body.paidWith,
     amount: req.body.amount,
     category: req.body.category,
     user: req.user._id

}
   
   createExpense(expense).then(data => {
     res.status(200).json({
       success: true,
       data
     })
   }).catch(e =>{ 
     console.error(e)
     res.status(400).json({
      success: false,
      e: e.stack
    })
    })
})

Router.get('/list', requireAuth, (req,res) => {  //requireAuth
  Expense.find((err,response)=> {
           if(err){
            res.json({
              success: false,
               err
            })
           }else{
            res.json({
              success: true,
              response
            })
           }
       })
})


Router.get('/list/:date',requireAuth, (req,res) => {
  Expense.find({
    date: parseInt(`${req.params.date}`)
  }, (err, expense)=>{
    if(err){
      res.json({
        success: false,
      })
     }else{
      res.json({
        success: true,
        expenses
      })
     }
  })
})

Router.get('/listbymonth',requireAuth, (req,res)=>{
  Expense.find({ "$expr": { "$eq": [{ "$month": "$expenseDate" }, new Date().getMonth()+1 ] } },
   (err, data) => {
       if(err){
      res.json({
        success: false,
      })
     }else{
      res.json({
        success: true,
        data
      })
     }
   }
)
})




module.exports = Router