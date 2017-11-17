angular.module('GoalPosts.Detail.Controller', [])

// TODO: Define a controller that will display a single Goal's detailed notes
.controller('DetailController', function ($scope, Goals, $rootScope) {

	Goals('/goals/' + $rootScope.goalId).then(function(result) {
    	console.log(result);
    	$scope.myGoal = result;
  });

 	

});
