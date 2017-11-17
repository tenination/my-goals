angular.module('GoalPosts.Goals.Service', [])

// TODO: Create a factory which provides $http functionality for Goals in other parts of the app.
.factory('Goals', function ($http, $location, $window) {
	 

	return function() {

		return $http({
        method : "GET",
        url : "/goals"
    }).then(function mySuccess(response) {
        return response.data;
    }, function myError(response) {
        return response.statusText;
    });


	}



		





});
