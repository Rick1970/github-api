var apiKey = require('./../.env').apiKey;

function Repo() {

}

Repo.prototype.getRepos = function(name) {
  console.log(name);
  $.get('https://api.github.com/users/' + name +'/repos?/access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));

    for(var i = 0; i <= response.length; i++){
      $('ul#repos').append("<li>" + response[i].name + "   "  + response[i].description + "</li>");
      if(response[i].description === null || response[i].description === ""){
        $('ul#description').append("<li>" + "Sorry, no description provided" + "</li>");
      } else {
        $('ul#description').append("<li>" + response[i].description + "</li>");
      }
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoModule = Repo;
