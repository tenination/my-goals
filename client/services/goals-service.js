angular.module('GoalPosts.Goals.Service', [])
.factory('Goals', function ($http, $location, $window) {
	 
	return function(url, method, data) {
	  return $http({
        method : method,
        url : url,
        data: data
      }).then(function mySuccess(response) {
      return response.data;
      }, function myError(response) {
        return response.statusText;
      });
	}
});
