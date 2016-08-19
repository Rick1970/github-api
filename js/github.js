function Repo(testRepo) {
  this.repo = testRepo;
}

Repo.prototype.test=function(test) {
  return test;
};

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repoModule = Repo;
