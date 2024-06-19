const mongoose = require('mongoose');

const Collection3Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  joined: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Collection3', Collection3Schema);
