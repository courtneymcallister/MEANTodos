var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todoRouter = require('./routers/todo.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//connect to the database
mongoose.connect(mongoURI);

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

//set up the front end
server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log('Now listening on port', port);
})
