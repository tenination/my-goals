angular.module('GoalPosts.Goals.Controller', [])

// TODO: Define a controller that allows the user to view all goals.
.controller('GoalsController', function ($scope, $http) {
	
	$http({
    method : "GET",
    url : "/goals"
  }).then(function mySuccess(response) {
      $scope.myData = response.data;
    }, function myError(response) {
      $scope.myData = response.statusText;
  });

});

