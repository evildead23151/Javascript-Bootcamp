const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's Your Name? ", function(namm) {
  console.log(`Hello, ${namm}`);
  rl.close();
});
rl.question("What's Your Name? ", (namm) => {
  console.log(`Hello, ${namm}`);
  rl.close();
});
