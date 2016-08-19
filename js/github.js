var apiKey = require('./../.env').apiKey;

function Repo() {
}

Repo.prototype.getRepos = function() {
  console.log("I am a repo object");
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


// exports.getRepos = function(){


exports.repoModule = Repo;
