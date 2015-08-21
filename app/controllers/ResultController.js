var ResultController = function($scope,VoteService){
  var self = this;
  self.$scope = $scope;

  var currentLocation = localStorage.getItem("current_location") || 1
  VoteService.result(currentLocation).then(function(data){
    $scope.results = data;
  })
};

ResultController.$inject = ["$scope","VoteService"];

angular.module("app").controller("ResultController",ResultController);