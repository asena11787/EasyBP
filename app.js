// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));

// use either jade or ejs
//app.set('view engine', 'jade');

// instruct express to server up static assets
app.use(express.static(__dirname + '/public'));

// set routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html"); 
});

var port = process.env.PORT || 4000;

// Set server port
app.listen(port, function(){
  console.log('Listening on port ' + port)
});