var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todoRouter = express.Router();


var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//connect to the database
mongoose.connect(mongoURI);

//middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

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

//routes
server.use(todoRouter);

server.listen(port, function(){
  console.log('Now listening on port', port);
})
