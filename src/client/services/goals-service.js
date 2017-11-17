angular.module('GoalPosts.Goals.Service', [])

// TODO: Create a factory which provides $http functionality for Goals in other parts of the app.
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
