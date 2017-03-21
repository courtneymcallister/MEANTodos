var mongoose = require('mongoose');

//create schema
var schemaTodos = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

//create the mongoose model
var Todo = mongoose.model('Todo', schemaTodos);
module.exports = Todo;
