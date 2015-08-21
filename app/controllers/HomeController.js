var HomeController = function ($scope,ALL_PARTIES) {
  var self = this;
  self.$scope = $scope;
  $scope.all_parties = ALL_PARTIES;
}

HomeController.$inject = ["$scope","ALL_PARTIES"];


angular.module('app')
  .controller('HomeController',HomeController);