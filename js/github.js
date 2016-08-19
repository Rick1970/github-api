var apiKey = require('./../.env').apiKey;

function Repo() {

}

Repo.prototype.getRepos = function(name) {
  console.log("I am a repo object");
  console.log(name);
  $.get('https://api.github.com/users/' + name +'/repos?/access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};





exports.repoModule = Repo;
