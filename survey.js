const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What do you think of Node.js? \nWhat's your name? Nicknames are also acceptable :) \nWhat's an activity you like doing? \nWhat do you listen to while doing that? \nWhich meal is your favourite(eg: dinner, brunch, etc.) \nWhat's your favourite thing to eat for that meal? \nWhat is your superpower? \nIn a few words, tell us what you are amazing at!", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

