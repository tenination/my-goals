angular.module('GoalPosts', [
  // TODO: Uncomment the following dependencies when you are ready to tackle authentication
  // 'GoalPosts.Auth.Service'
  // 'GoalPosts.Auth.Controller',

  // // TODO: ADD YOUR MODULES HERE
  'GoalPosts.Goals.Controller',
  'GoalPosts.GoalForm.Controller',
  'GoalPosts.Detail.Controller',
  'GoalPosts.Goals.Service',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    // TODO: ADD ROUTES HERE
    .when("/", {
        templateUrl : "./views/goals.html",
        controller: "GoalsController"
    })
    .when("/goal-form", {
        templateUrl : "./views/goal-form.html",
        controller: "GoalFormController"

    })
    .when("/goal-detail", {
        templateUrl : "./views/detail.html",
        controller: "DetailController"
    });


    // TODO: Uncomment the following routes when you are ready to tackle authentication

    // .when('/signin', {
    //   templateUrl: 'views/login.html',
    //   controller: 'AuthController'
    // })
    // .when('/signup', {
    //   templateUrl: 'views/signup.html',
    //   controller: 'AuthController'
    // })

  // $httpProvider.interceptors.push('AttachTokens');
})

// TODO: Uncomment the following code when you are ready to tackle authentication

// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to pause all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.gp');
//       if (jwt) object.headers['x-access-token'] = jwt;
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/signin');
//     }
//   });
// });
