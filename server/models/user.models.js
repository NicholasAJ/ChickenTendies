const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: true,
    uniqure: true,
    minlength: 6,
    message: 'username must be at least 6 characters long'
  },
  password:{
    type: 'string',
    required: true,
    message: 'must have a password'
  },
  name:{
    type: 'string',
    required: true,
    minlength: 2,
    message: 'name must be at least 2 characters long'
  },
});

module.exports = mongoose.model('User', UserSchema);