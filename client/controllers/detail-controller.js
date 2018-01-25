angular.module('GoalPosts.Detail.Controller', [])
.controller('DetailController', function ($scope, Goals, $rootScope) {
	Goals('/goals/' + $rootScope.goalId, 'GET').then(function(result) {
    	console.log(result);
    	$scope.myGoal = result;
  });
});
