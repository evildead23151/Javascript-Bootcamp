const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your username: ", function(username){
  rl.question("Enter your password: ", function(password){
    if (username == "admin" && password == "1234"){console.log("Login successful! Welcome, admin.");
    } else { 
        console.log("incorect.");
      }
      rl.close();
  });
});