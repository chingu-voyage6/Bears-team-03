require('./config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Passport = require('./Services/Passport')
const morgan = require('morgan')

const User = require('./routes/User')
const Expense = require('./routes/Expense')
const Income = require('./routes/Income')

// Initialize Server, Port and DB Setup


if (process.env.NODE_ENV === 'production') {
  app.use(express.static("./client/build"));
}


const Server = express()
const Port = process.env.port || 4000
mongoose.connect(process.env.MONGODB_URI)
        .then(response => {
          console.log(`Connected to DB: ${process.env.MONGODB_URI}`)
        })
        .catch(e => {
          console.log({
            message: 'Failed to connect to DB',
            error: e.message
          })
        })


// Middleware
Server.use(morgan('tiny'))
Server.use(cors()) // Cross site requests. Basically we can call the API from our react frontend on a different port
Server.use(bodyParser.json()) // Adds a body to the request so we can send data in json format
Server.use('/user', User)
Server.use('/expense', Expense)
Server.use('/income', Income)
Server.use(Passport.initialize()) // Initialize the Passport middleware

// Start Server
Server.listen(Port, (err) => {
  if(err) {
    console.log('Server Error', err)
  }
  console.log(`Server running on Port: ${Port}`)
})