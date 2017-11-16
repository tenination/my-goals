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

// Example route. See server-spec.js for the related test.
app.get('/zen', function(req, res) {
	console.log('/zen is requested');
  res.send('There are no accidents. - Master Oogway');
});

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 8080...')
});

module.exports = app;
