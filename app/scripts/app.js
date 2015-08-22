'use strict'

Parse.initialize("2IBIHfTx10zXXo7R8LCpet6J3ECCYAkxH7PLvHSk", "4kgEfFMIXIDiq3RbWjBOYG1Hx1TTKAAKtAjfN4kt");

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });
angular.module('app', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'chart.js',
  'mobile-angular-ui.core',
  'mobile-angular-ui.gestures',
  'mobile-angular-ui',
  'mobile-angular-ui.migrate'
]);

var App = angular.module('app');

App.config(['$routeProvider',
  '$locationProvider',
function($routeProvider,$locationProvider, config){

  $routeProvider
    .when('/',{templateUrl: '/partials/home.html'})
    .when('/choose-location',{templateUrl: '/partials/choose-location.html'})
    .when('/votes',{templateUrl: '/partials/votes.html'})
    .when('/finish',{templateUrl: '/partials/finish.html'})
    .when('/results',{templateUrl: '/partials/results.html'})
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(false);

}]);


