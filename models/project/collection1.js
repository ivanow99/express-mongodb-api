const mongoose = require('mongoose');

const Collection1Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Collection1', Collection1Schema);

