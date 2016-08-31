module.exports = function(robot){
  bot.respond(/What's your favorite food?/, function(res) {
   return res.send("I'm a robot--I don't eat food!");
 });

 bot.hear(/Hello/, function(res){
   return res.send("Hi there!")
 })
}
