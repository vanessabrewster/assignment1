module.exports = function(robot) {

    robot.hear(/asl?/, function(res){
        let asl = ["24, F, Sydney", "60, M, Brisbane", "12, F, Tasmania"];
        let randomasl = asl[Math.floor(Math.random()*3)];
        return res.send(randomasl);
    });

    function getEmoji(emotion){
      let sadEmoji = ["😞", "😒", "😫"];
      let happyEmoji = ["😀", "😊", "😌"];

      if (emotion === "sad") {
        return sadEmoji[Math.floor(Math.random() * 3)];
      }

      if (emotion === "happy") {
        return happyEmoji[Math.floor(Math.random() * 3)];
      }
    }

    robot.respond(/I'm (.*)/i, function (res){
      let randomSadEmotions = ["sad", "bummed", "unhappy", "devo"];
      let randomHappyEmotions = ["happy", "elated", "great", "the best"]

      if (randomSadEmotions.includes(res.match[1])){
        return res.send(getEmoji("sad"));
      }

      if (randomHappyEmotions.includes(res.match[1])){
        return res.send(getEmoji("happy"));
      }

    })

    robot.hear(/What did you have for (.*)/i, function(res){
      let meal = res.match[1];
      switch(meal) {
        case 'dinner?':
          return res.send('Burgers');
          break;
        case 'lunch?':
          return res.send('Salad');
          break;
        case 'brunch?':
          return res.send('French Toast');
          break;
        case 'breakfast?':
          return res.send('Eggs');
          break;
        default:
          return res.send('Huh?');
      }
    })


}
