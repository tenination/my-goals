var db = require('./db');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE

Goal.addGoal = function(goal) {
	return db('goals').insert({user_id: goal.user_id, description: goal.description, completed:goal.completed})
		.then(function() {
			console.log('Goal added!')
		})
		.catch(function(err) {
			console.error(err)
		});
};

Goal.getGoal = function(goalId) {
	return db('goals').where('id', goalId)
		.then(function() {
			console.log('Goal retrieved')
		})
		.catch(function(err) {
			console.error(err);
		});
};

Goal.updateGoal = function(goalId) {
	return db('goals').where('id', goalId).update({completed:'T'})
	.then(function() {
		console.log('Goal updated to complete!')
	})
	.catch(function(err) {
		console.error(err);
	});
};

Goal.findUserGoals = function(userId) {
	return db('goals').where('user_id', userId)
	.then(function() {
		console.log('All goals for user retrieved!')
	})
	.catch(function(err) {
		console.error(err);
	});
};

module.exports = Goal;


