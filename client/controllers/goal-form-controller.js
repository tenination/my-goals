angular.module('GoalPosts.GoalForm.Controller', [])

.controller('GoalFormController', function ($scope, $http, Goals) {

	$scope.newGoal = {};
	$scope.newGoal.user_id = 1;
	$scope.newGoal.title = 'type here';
	$scope.newGoal.description = 'type here';
	$scope.newGoal.due_date = '12-31-18'
	$scope.newGoal.completed = 'F';
 
	$scope.addGoal = function() {
		console.log('Form Submitted!');
	  Goals('/goals', 'POST', $scope.newGoal).then(function(result) {
	    console.log('POST REQUEST SUCCESS!')
	  });
		
	}

});
