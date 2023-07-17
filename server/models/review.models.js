const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  restaurantName: {
    type: 'string',
    required: true,
    minlength: 6,
    message: 'Restaurant name must be at least 6 characters long'
  },
  price: {
    type: 'number',
    required: true,
  },
  crispiness: {
    type: 'number',
    required: true
  },
  flavor: {
    type: 'number',
    required: true
  },
  size: {
    type: 'number',
    required: true
  },
  comments: {
    type: 'string',
  },
  createdBy: {
    type:'String',
    required: true
  },
});

module.exports = mongoose.model('Review',ReviewSchema);