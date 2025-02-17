const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define Functions
function add(a, b) {
  console.log("Result:", a + b);
}
function sub(a, b) {
  console.log("Result:", a - b);
}
function multiply(a, b) {
  console.log("Result:", a * b);
}
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero!");
  } else {
    console.log("Result:", a / b);
  }
}

// Main Function
function doMath(a, b, operation) {
  if (operation === "+") {
    add(a, b);
  } else if (operation === "-") {
    sub(a, b);
  } else if (operation === "*") {
    multiply(a, b);
  } else if (operation === "/") {
    divide(a, b);
  } else {
    console.log("Invalid operation!");
  }
}

// Take User Input
rl.question("Enter first number: ", function (num1) {
  rl.question("Enter second number: ", function (num2) {
    rl.question("Enter operation (+, -, *, /): ", function (operation) {
      doMath(parseFloat(num1), parseFloat(num2), operation);
      rl.close();
    });
  });
});
