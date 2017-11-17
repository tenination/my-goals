var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var goal = require('./models/goal');
var user = require('./models/user');

// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.


router.post('/signup', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.get('/goals', function(req, res) {

  goal.getAllGoals(function(result) {
    res.json(result);
  });

});

router.get('/goals/:id', function(req, res) {
  
  goal.getGoal(req.params.id, function(result) {
    res.json(result);
  });

});

router.post('/goals/complete', function(req, res) {

  goal.updateGoal(req.body.goalId, function(result) {
    res.json(result);
  });
  console.log('goals/complete request received');
  
});

router.post('/goals', function(req, res) {

  goal.addGoal(req.body, function(result) {
    res.json(result);
  });

});

router.post('/login', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

module.exports = router;
