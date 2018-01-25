angular.module('GoalPosts.Goals.Controller', [])

.controller('GoalsController', function ($scope, Goals, $rootScope) {
	
    Goals('/goals', 'GET').then(function(result) {
    	console.log(result);
    	$scope.myGoals = result;
    });

    $scope.goalClick = function(input) {
    	console.log('Clicked!', input);
    	$rootScope.goalId = input;

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
