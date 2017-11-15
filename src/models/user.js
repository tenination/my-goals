var db = require('./db');

var User = {};

User.findByUsername = function(username) {
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

// TODO: ADD MORE MODEL FUNCTIONS HERE

User.addUser = function(user) {
	return db('users').insert({username:user.username, password:user.password})
		.then(function() {
			console.log('new user added!')
		})
		.catch(function(err) {
			console.error(err)
		});
};





module.exports = User;
