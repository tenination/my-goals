angular.module('GoalPosts.Goals.Service', [])

// TODO: Create a factory which provides $http functionality for Goals in other parts of the app.
.factory('Goals', function ($http, $location, $window) {
	 var getGoals = function () {
    return $http({
      method: 'GET',
      url: '/goals/5'
    })
    .then(function (resp) {
      console.log('Success ', resp);
    });
  };

});
