function Repo(testRepo) {
  this.repo = testRepo;
}

Repo.prototype.test=function(test) {
  return test;
};

exports.repoModule = Repo;
