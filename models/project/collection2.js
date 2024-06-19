const mongoose = require('mongoose');

const Collection2Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Collection2', Collection2Schema);

