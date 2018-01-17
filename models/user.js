var db = require('./db');

var User = {};

User.findUserId = function(username, callback) {
  return db.select('id').table('users').where('username', username)
  .then(function(data) {
    console.log('userid is ', data);
    callback(data[0].id);
  })
  .catch(function(err) {
    callback(err);
  });
};

User.findByUserCredentials = function(username, password, callback) {
  return db('users').where({ username: username, password:password }).select('*')
    .then(function(result) {
    	if (result[0]) {
    		callback(true);
    	} else {
    		callback(false);
    	}
    })
    .catch(function(err) {
      console.log(err);
      callback(err);
    });
};

User.doesUsernameExist = function(username, callback) {
  return db('users').where({ username: username}).select('*')
    .then(function(result) {
    	if (result[0]) {
        callback(true);
      } else {
        callback(false);
      }
    })
    .catch(function(err) {
      console.error(err);
      callback(err);
    });
};

// TODO: ADD MORE MODEL FUNCTIONS HERE

User.addUser = function(user, callback) {
	return db('users').insert({username:user.username, password:user.password})
		.then(function() {
			console.log('new user added!')
			callback('New User added!');
		})
		.catch(function(err) {
			console.error(err)
		});
};

module.exports = User;
