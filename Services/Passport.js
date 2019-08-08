const { setConfig } = require('../config/config')
const Passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const User = require('../models/User')

const config = setConfig();

// Local Strategy
const opts = { usernameField: 'userName' }

const localLogin = new LocalStrategy(opts, (userName, password, done) => {
  // Find User
  User.findOne({ userName: userName }, (err, user) => {
    // Error
    if(err) { return done(err) }

    // No User Found
    if(!user) { return done(null, false) }

    // Found User - Compare Passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if(err) { return done(err) }

      // Passwords do not match
      if(!isMatch) {
        return done(null, false)
      }

      // Passwords Match
      return done(null, user)
    })
  })
})

// JsonWebToken Options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, { password: 0 }, (err, user) => {
    if(err) { return done(err, false) }
     console.log('jwt error',err)
    if(user) { return done(null, user) }

    return done(null, null)
  })
})

// Tell passport to use theses strategies
Passport.use(jwtLogin)
Passport.use(localLogin)

module.exports = Passport;