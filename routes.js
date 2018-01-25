var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var goal = require('./models/goal');
var user = require('./models/user');

var secret = 'myappisawesome';

router.post('/signup', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  user.doesUsernameExist(username, function(exists) {
    if (username && password) {
      if (exists) {
        res.status(409).json('Username Already Exists');
      } else {
        user.addUser({username:username, password:password}, function() {
          var token = jwt.encode({username:username}, secret);
          res.status(200).json(token);
        });
      }
    } else {
      res.status(409).json('Enter both username and password');
    }
  });
});

router.get('/goals', function(req, res) {
  console.log(req.headers['x-access-token']);
  var token = req.headers['x-access-token'];
  var decoded = jwt.decode(token, secret);
  var username =  decoded.username;

  user.findUserId(username, function(result) {
    var user_id = result;
    goal.findUserGoals(user_id, function(outcome) {
      res.json(outcome);
    });
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

  var token = req.headers['x-access-token'];
  var decoded = jwt.decode(token, secret);
  var username = decoded.username;
  var newGoal = req.body;

  console.log('post request to /goals detected!');
  console.log('username is equal to ', username);

  user.findUserId(username, function(result) {
    var user_id = result;
    goal.addGoal(user_id, newGoal, function(result) {
      res.json(result);
    });
  });

});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  console.log('/login page requested!');
  console.log('entered username and password are ', username, password);

  user.findByUserCredentials(username, password, function(exists) {
    if (exists) {
      var token = jwt.encode({username:username}, secret);
      res.status(200).json(token);
    } 

    else {
      res.status(401).json('Invalid Credentials!');
    }
  });
});

module.exports = router;
