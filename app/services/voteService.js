var VoteService = function(){

};

VoteService.prototype.vote = function(location,party){

};

VoteService.prototype.result = function(){
  return {
    PAP : 30,
    DPP: 40,
    SingFirst: 34
  };
}

angular.module("app").service("VoteService",VoteService);