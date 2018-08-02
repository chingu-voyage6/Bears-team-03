const Router = require('express').Router()
const passport = require('../Services/Passport')

const User = require('../models/User')
const Authentication = require('../controllers/Authentication')


//localLogin,jwtLogin
const requireSigin = passport.authenticate('local', { session: false })

const requireAuth = passport.authenticate('jwt', { session: false })



// Create User
Router.post('/create', Authentication.createUser)

// LogIn User
Router.post('/login', requireSigin, Authentication.signIn)

// Update User
Router.post('/update', requireAuth, Authentication.updateUser)

// User Dashboard
Router.get('/dashboard',requireAuth, Authentication.userDashboard) //add requireAuth back

module.exports = Router 