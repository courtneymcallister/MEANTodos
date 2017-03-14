var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//connect to the database
mongoose.connect(mongoURI);

//middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//create schema
var schemaTodos = mongoose.Schema({
  description: String,
  completed: Boolean
});

//create the mongoose model
var Todo = mongoose.model('Todo', schemaTodos);

//testing the database
// var todo = new Todo({
//   description: 'Get milk',
//   completed: false
// });
// todo.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//GET /todos
server.get('/todos', function(req, res){
  Todo.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

//GET /todos/:id
server.get('/todos/:id', function(req, res){
  Todo.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

//POST /todos
server.post('/todos', function(req, res){
  var todo = new Todo(req.body);
  todo.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Success'
      });
    }
  });
});

//PUT /todos/:id
server.put('/todos/:id', function(req, res){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
    }
  });
});

//DELETE /todos/:id
server.delete('/todos/:id', function(req, res){
  Todo.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      })
    }
  });
});

server.listen(port, function(){
  console.log('Now listening on port', port);
})
