var apiKey = require('./../.env').apiKey;

function Repo() {

}

Repo.prototype.getRepos = function(name) {
  console.log(name);
  $.get('https://api.github.com/users/' + name +'/repos?/access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));



    for(var i = 0; i <= response.length; i++){

      $('ul#final').append("<li>" + response[i].name + "   "  + response[i].description + "</li>");
    }

    }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

Repo.prototype.loadRepos = function(response) {



};





exports.repoModule = Repo;
