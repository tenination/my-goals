angular.module('GoalPosts.Goals.Controller', [])

// TODO: Define a controller that allows the user to view all goals.
.controller('GoalsController', function ($scope, Goals) {
	

    Goals().then(function(result) {
    	console.log(result);
    	$scope.myData = result;
    });
 



});

