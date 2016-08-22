var Repo = require("./../js/github.js").repoModule;

//Collect user input
$(document).ready(function() {
  $('#getName').click(function() {
    var name = $('#name').val();
    $('#name').val("");

    //Create object; call function from prototype
    var repoObject = new Repo();
    repoObject.getRepos(name);
  });
});
