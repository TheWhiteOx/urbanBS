var mongoose = require('mongoose');
var db = require('../db.js');

var QuestionSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true
  },

  definition: {
    type: String,
    required: true
  },

});


module.exports = mongoose.model('Question', UserSchema);