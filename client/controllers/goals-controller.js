angular.module('GoalPosts.Goals.Controller', [])

// TODO: Define a controller that allows the user to view all goals.
.controller('GoalsController', function ($scope, Goals, $rootScope) {
	

    Goals('/goals', 'GET').then(function(result) {
    	console.log(result);
    	$scope.myGoals = result;
    });

    $scope.goalClick = function(input) {
    	console.log('Clicked!', input);
    	$rootScope.goalId = input;

    	// Goals().then(function(result) {
    	//   console.log(result);
    	//   $scope.myGoals = result;
     //  });

    };

    $scope.showCompleted = function(completed) {
      console.log('completed is ', completed);
      return completed === 'F' ? true : false;
    };

    $scope.completedClick= function(goalId) {
      console.log('clicked on Completed button!');

      Goals('/goals/complete', 'POST', {goalId:goalId}).then(function(result) {
        console.log('SUCCESS, goal was updated');
      });

    };


});

