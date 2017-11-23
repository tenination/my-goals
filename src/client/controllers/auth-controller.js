angular.module('GoalPosts.Auth.Controller', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.login = function () {
    Auth.login($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.gp', token);
        $location.path('/goals');
      })
      .catch(function (error) {
        console.log('Login unsuccessful');
        console.error(error);
      });
  };



  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        console.log('token is ', token);
        $location.path('/goals');
        $window.localStorage.setItem('com.gp', token);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
