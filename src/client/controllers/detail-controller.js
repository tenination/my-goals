angular.module('GoalPosts.Detail.Controller', [])

// TODO: Define a controller that will display a single Goal's detailed notes
.controller('DetailController', function ($scope, $http) {


	$http({
    method : "GET",
    url : "/goals/4"
  }).then(function mySuccess(response) {
      $scope.myData = response.data;
    }, function myError(response) {
      $scope.myData = response.statusText;
  });
 

});
