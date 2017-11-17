var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');
var app = express();

// TODO: SET UP SERVER
  // Add middleware
app.use(bodyParser.json());
  // Add static file service
app.use(express.static(__dirname + '/client'));
app.use('/scripts', express.static(__dirname + '/node_modules'));


app.use('/', router);
//app.use()
// Add API routes

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 8080...');
});

module.exports = app;
