var mongoose = require('mongoose');

//create schema
var schemaTodos = mongoose.Schema({
  description: String,
  completed: Boolean
});

//create the mongoose model
var Todo = mongoose.model('Todo', schemaTodos);
module.exports = Todo;
