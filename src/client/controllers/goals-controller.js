angular.module('GoalPosts.Goals.Controller', [])

// TODO: Define a controller that allows the user to view all goals.
.controller('GoalsController', function ($scope, Goals, $rootScope) {
	

    Goals('/goals').then(function(result) {
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



    }


});

