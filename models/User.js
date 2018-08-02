const mongoose = require('mongoose')
const beuatifyUnique = require('mongoose-beautiful-unique-validation')

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.plugin(beuatifyUnique)

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.createUser = (newUser, callback) => {
  newUser.save(callback)
}

module.exports.updateUser = (updUser, callback) => {
  updUser.save(callback)
}

// TODO: Look at moving all DB updating functions here