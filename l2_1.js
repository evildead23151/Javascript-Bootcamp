const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(nmber){
if (nmber%2==0){console.log("Even Number.")}
else console.log("Odd number is given.");
rl.close();
});