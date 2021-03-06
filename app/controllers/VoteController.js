var VoteController = function($scope,$location,ALL_PARTIES,VoteService){
  var self = this;
  self.$scope = $scope;
  self.$location = $location;
  self.VoteService = VoteService;

  $scope.all_parties = ALL_PARTIES;

  $scope.makeTheVote = function(){
    var currentLocation = +localStorage.getItem("current_location") || 1;
    var votedLocations = JSON.parse(localStorage.getItem("voted_locations") || "[]");
    
    if(votedLocations.indexOf(currentLocation) > -1){
      // show message box
      alert("You have vote on this area !!");
      return;
    }

    var votes = [];
    for(var i=0, length = ALL_PARTIES.length; i < length; ++ i){
      var party = $scope.all_parties[i];
      if(party.isVoted){
        votes.push({location: currentLocation,party: party.partyId });
      }
    }

    if(votes.length > 0){
      VoteService.multipleVotes(votes).then(function(){
        votedLocations.push(currentLocation);
        localStorage.setItem("voted_locations",JSON.stringify(votedLocations));
        $location.path("/finish");
      });
    }else{
      $location.path("/finish");
    }
  };

};

VoteController.$inject = ["$scope","$location","ALL_PARTIES","VoteService"];

angular.module("app").controller("VoteController",VoteController);