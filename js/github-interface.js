var Repo = require("./../js/github.js").repoModule;


$(document).ready(function() {
  $('#getName').click(function() {
    var name = $('#name').val();
    $('#name').val("");
    alert(name);
    var repoObject = new Repo();
    repoObject.getRepos();
  });
});
