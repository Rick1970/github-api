var apiKey = require('./../.env').apiKey;

//Object constructor
function Repo() {
}

//Object prototype storing function
Repo.prototype.getRepos = function(name) {
  
  //API call
  $.get('https://api.github.com/users/' + name +'/repos?/access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));

    //Display header descriptions
    $('ul#repos').append("<li>" +"Here are the repos:" + "</li");
    $('ul#description').append("<li>" +"Here are the descriptions:" + "</li");

    //Loop through response
    for(var i = 0; i <= response.length; i++){
      $('ul#repos').append("<li>" + response[i].name + "</li>");

      //Determine if there is description.  Post description or message
      if(response[i].description === null || response[i].description === ""){
        $('ul#description').append("<li>" + "Sorry, no description provided" + "</li>");
      } else {
        $('ul#description').append("<li>" + response[i].description + "</li>");
      }
    }
    //Fail message to console
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoModule = Repo;
