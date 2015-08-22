var ResultController = function($scope,ALL_PARTIES,VoteService){
  var self = this;
  self.$scope = $scope;

  self.$scope.labels = _.map(ALL_PARTIES, function(party){
    return party.title;
  });

  var currentLocation = localStorage.getItem("current_location") || 1
  VoteService.result(currentLocation).then(function(data){
    console.log(data);
    var sortedData = _.sortBy(data,function(item){
      return item.party;
    });

    $scope.data = _.map(sortedData,function(item){
      return item.count;
    });

  })
};

ResultController.$inject = ["$scope","ALL_PARTIES","VoteService"];

angular.module("app").controller("ResultController",ResultController);