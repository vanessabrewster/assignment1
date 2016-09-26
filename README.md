Instructions
============
This bot does three different things:

1. She's a big fan of msn and the language used on the program. She's also a bit of a liar. If you ask the thread for an asl, this bot will respond with a random one of her liking.

eg "asl?"

This function uses robot.hear, variables, if statements and math.random

2. This bot also loves to respond with emojis. If you tell her you are "sad", "bummed", "unhappy" or "devo", she will respond from a string of random sad emojis. Additionally, if you tell her you are "happy", "elated", "great" or "the best", then she will respond from a string of random happy emojis.

eg "@vanessa I am sad"

This function uses robot.respond, variables, math.random and .includes. With the help of Nick, I was able to DRY up this code to make it repeat itself less.

3. This bot also loves to chat about food. Ask her what she had for breakfast, lunch, brunch or dinner and she'll let you know.

eg "What did you have for dinner?"

This function uses switch() to pass in different meals and returns different answers
