Meteor.methods({
  'userProfile': function (githubInfo) {
    var info = {
      avatar: githubInfo.avatar_url,
      followers: githubInfo.followers,
      following: githubInfo.following,
      repos: githubInfo.public_repos
    }
    Meteor.users.update(this.userId, {$set: info})
  }
});