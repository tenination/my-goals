angular.module('GoalPosts.GoalForm.Controller', [])

// TODO: Define a controller that will allow the user to create a new Goal
.controller('GoalFormController', function ($scope, $http) {
 
	$http({
    method : "POST",
    url : "/goals"
  }).then(function mySuccess(response) {
      $scope.myData = response.data;
    }, function myError(response) {
      $scope.myData = response.statusText;
  });

});