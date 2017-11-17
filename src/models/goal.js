var db = require('./db');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE
Goal.getAllGoals = function(callback) {
	return db.select().table('goals')
	.then(function(data) {
		console.log('All goals in database retrieved!');
		callback(data);
	})
	.catch(function(err) {
		console.error(err);
		callback(err);
	});
};

Goal.addGoal = function(goal, callback) {
	return db('goals').insert({user_id: goal.user_id, title: goal.title, description: goal.description, due_date: goal.due_date, completed:goal.completed})
		.then(function(data) {
			console.log('Goal added!', data);
			callback(data)
		})
		.catch(function(err) {
			console.error(err);
			callback(err);
		});
};

Goal.getGoal = function(goalId, callback) {
	return db('goals').where('id', goalId)
		.then(function(data) {
			console.log('Goal retrieved');
			callback(data);
		})
		.catch(function(err) {
			console.error(err);
			callback(err);
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


