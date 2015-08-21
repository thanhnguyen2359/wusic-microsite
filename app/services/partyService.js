var PartyService = function(){

};

PartyService.prototype.all_parties = function(){
  return [{
    title: "People's Action Party",
    content : ""
  },
  {
    title: "Democratic Progressive Party",
    content: ""
  },
  {
    title: "Singaporeans First",
    content: ""
  }];
};

angular.module("app").service("PartyService",PartyService);