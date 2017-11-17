angular.module('GoalPosts.GoalForm.Controller', [])

// TODO: Define a controller that will allow the user to create a new Goal
.controller('GoalFormController', function ($scope, $http, Goals) {

	$scope.newGoal = {};
	$scope.newGoal.user_id = 1;
	$scope.newGoal.description = 'Eat more beef';
	$scope.newGoal.completed = 'F';
 
	$scope.addGoal = function() {
		console.log('Form Submitted!');
	  Goals('/goals', 'POST', $scope.newGoal).then(function(result) {
	   
	   console.log('POST REQUEST SUCCESS!')
	  });
		
	}

});