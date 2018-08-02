const bcrypt = require('bcrypt') // Password hashing tool
const jwt = require('jwt-simple') // Json web token, for protected routes 
const User = require('../models/User')
const Expense = require('../models/Expense')
const Income = require('../models/Income')

// Create JWT based on userID
const userToken = user => {
  const timeStamp = new Date().getTime()
  return jwt.encode({ sub: user._id, iat: timeStamp }, process.env.JWT_SECRET)
} 

// Create User
module.exports.createUser= (req, res, next) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  }) 

  // Hash password using Bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    if(err) { return next(err) }
    console.log('SALT', salt)
    console.log('RAWPASS', newUser)
    
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) { return next(err) }

      newUser.password = hash 

      User.createUser(newUser, (err, user) => {
        if(err) {
          res.json({
            success: false,
            error: err.errors
          })
        } else {
            res.json({
              success: true,
              token: userToken(user)
            })
        }
          
      })
    })
  })
}

// Sign In UserresizeBy
module.exports.signIn = (req, res) => {
  res.json({
    success: true,
    user: res.req.user,
    token: userToken(req.user)
  })
}

// User Dashboard
module.exports.userDashboard = (req, res) => {
  console.log('REQUEST', req.headers)
  console.log('GOING TO USERS BOARD')
  User.findOne({ '_id': req.user._id }, '-password', (err, user) => {
    if(err) {
      console.log('find user error', err)
      res.json({
        success: false,
        error: err
      })
    } else {
   //get accumulated expenses for the month
    Expense.aggregate(
   [
      {
        $group : {
           _id : { month:{ $month: "$expenseDate" },category:"$category" }, 
           totalPrice: { $sum: { $multiply: [ "$amount", 1 ] } },
        }
    }
   
   ], (err, expenses) => {
       if(err){
      res.json({
        success: false,
        error: err
      })
     }else{
      res.json({
        success: true,
        user: user,
        expenses: Object.assign({}, expenses)
      })
     }
   }
)
    }
  })
}

module.exports.updateUser = (req, res) => {
  let updUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email
  }

  User.findByIdAndUpdate(req.user._id, updUser, { new: true }, (err, user) => {
    if(err) {
      res.json({
        success: false,
        error: err
      })
    } else {
        Expense.find({'user': req.user._id}, (err, expenses) => {
          if(err) {
            res.json({
              success: false,
              error: err
            })
          } else {
              Income.find({'user': req.user._id}, (err, incomes) => {
                if(err) {
                  res.json({
                    success: false,
                    error: err
                  })
                } else {
                  res.json({
                    success: true,
                    user: user,
                    expenses,
                    incomes
                  })
                }
              })
          }
        })
    }
  })
}
