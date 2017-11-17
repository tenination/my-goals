angular.module('GoalPosts.Detail.Controller', [])

// TODO: Define a controller that will display a single Goal's detailed notes
.controller('DetailController', function ($scope) {


	$http({
    method : "GET",
    url : "/goals"
  }).then(function mySuccess(response) {
      $scope.myWelcome = response.data;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
  });
 

});
