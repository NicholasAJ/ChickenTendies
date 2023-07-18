const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  restaurantName: {
    type: 'string',
    required: true,
    minlength: 3,
    message: 'Restaurant name must be at least 3 characters long'
  },
  price: {
    type: 'number',
    required: true,
    message: "Price is required"
  },
  crispiness: {
    type: 'number',
    required: true,
    message: "please select a number 1-5"
  },
  flavor: {
    type: 'number',
    required: true,
    message: "please select a number 1-5"
  },
  size: {
    type: 'number',
    required: true,
    message: "please select a number 1-5"
  },
  comments: {
    type: 'string',
    required:true,
    message: "Please leave a comment"
  },
  createdBy: {
    type:'String',
  },
});

module.exports = mongoose.model('Review',ReviewSchema);