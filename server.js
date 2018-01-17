var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.use('/', router);

app.listen(port, function () {
  console.log('GoalPosts App \nListening on port 8080...');
});

module.exports = app;
