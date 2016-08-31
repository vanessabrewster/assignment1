module.exports = function(bot){
  bot.respond(/What's your favorite food?/, function(res) {
   return res.send("I'm a robot--I don't eat food!");
 });

 bot.hear(/Hello/, function(res){
   return res.send("Hi there!")
 })

 bot.respond(/Hi Hubot! My name is (.*)/i, function(msg){
   let name;
   name = msg.match[1];
   if (name == "Hubot"){
     return msg.send("You're not Hubot--I'm Hubot!");
   } else {
     return msg.reply("Nice to meet you," + name + "!");
   }
 });

}
