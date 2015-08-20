var LocationService = function(){

};

LocationService.prototype.all_locations = function(){
  return ["Tampines","Tanjong Pagar", "West Coast", "Whampoa"];
}



angular.module("app").service("LocationService",LocationService);