var db = require('./db');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE

Goal.addGoal = function(goal) {
	return db('goals').insert({user_id: goal.user_id, description: goal.description})
		.then(function() {
			console.log('Goal added!')
		})
		.catch(function(err) {
			console.error(err)
		});
};

module.exports = Goal;
