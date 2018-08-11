require('./config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Passport = require('./Services/Passport')
const morgan = require('morgan')
const path = require('path')
const User = require('./routes/User')
const Expense = require('./routes/Expense')
const Income = require('./routes/Income')

// Initialize Server, Port and DB Setup





const Server = express()

const Port = process.env.PORT || 4000
console.log("heroku port", Port)
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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start Server
Server.listen(Port,'0.0.0.0', (err) => {
  if(err) {
    console.log('Server Error', err)
  }
  console.log(`Server running on Port: ${Port}`)
})