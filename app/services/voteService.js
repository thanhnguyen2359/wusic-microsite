var VoteService = function($q){
  var self = this;
  self.Vote = Parse.Object.extend("Votes");
  self.$q = $q;
};

VoteService.prototype.multipleVotes = function(votes){
  var self = this;
  var deferred = self.$q.defer();
  var count = 0;
  for(var i=0, len = votes.length; i < len; ++i){
    self.vote(votes[i].location,votes[i].party).then(function(){
      if(++ count >= len){
        deferred.resolve(count);
      } 
    },function(){
      deferred.reject();
    });
  }

  return deferred.promise;
}

VoteService.prototype.vote = function(location,party){
  var self = this;
  var query = new Parse.Query(self.Vote);
  var vote = new self.Vote();
  var deferred = self.$q.defer();

  query.equalTo("location",location);
  query.equalTo("party",party);

  query.find({
    success:function(data){
      var item = data.length > 0 ? data[0]: {};
      vote.set("objectId", item.id);
      vote.set("location", location);
      vote.set("party",party);
      vote.set("count", item._serverData ? ++item._serverData.count : 1);
      vote.save(null,{
        success: function(){
          deferred.resolve();
        }, errors: function(){
          deferred.reject();
        }
      });
    },
    errors: function(){
      deferred.reject();
    }
  });
  
  return deferred.promise;
};

VoteService.prototype.result = function(location){
  var self = this;
  var deferred = self.$q.defer();
  var query = new Parse.Query(self.Vote);

  query.equalTo("location", location);
  query.find({
    success: function(result){
      var data = _.map(result,function(item){
        return item._serverData;
      });
      deferred.resolve(data);
    },
    errors: function(err){
      deferred.reject(err);
    }
  });

  return deferred.promise;
}

VoteService.$inject = ["$q"];

angular.module("app").service("VoteService",VoteService);