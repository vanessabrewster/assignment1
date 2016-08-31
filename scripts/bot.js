module.exports = function(robot){
  bot.respond(/What's your favorite food?/, function(res) {
   return res.send("I'm a robot--I don't eat food!");
 });
}

// // Add your change:
//  `git add .`
//
//  Commit your change:
//  `git commit -m "changed bot blah blah"`
//
//  Push changes to heroku:
//  `git push heroku master`
