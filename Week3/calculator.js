"use strict";
// The objective is to create a simple calculator that operates in the console, capable of performing basic arithmetic operations: addition, subtraction, multiplication, and division. The program will prompt the user to input two numbers and select an operation. It will then compute and display the result, handling cases like division by zero gracefully.
Object.defineProperty(exports, "__esModule", { value: true });
// validate user input for numbers
var readline = require("readline-sync");
function validateNumber(input) {
    var parsedNumber = parseFloat(input);
    if (isNaN(parsedNumber)) {
        console.log("Invalid input. Please enter a valid number.");
        return null;
    }
    return parsedNumber;
}
//arithmetic operations
function performOperation(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
                return NaN;
            }
            return num1 / num2;
        default:
            console.log("Invalid operation. Please choose from: +, -, *, /");
            return NaN;
    }
}
while (true) {
    console.log("\nSimple Calculator");
    console.log("Enter two numbers:");
    var num1Input = readline.question("Number 1: ");
    var num2Input = readline.question("Number 2: ");
    var num1 = validateNumber(num1Input);
    if (num1 === null) {
        continue;
    }
    var num2 = validateNumber(num2Input);
    if (num2 === null) {
        continue;
    }
    console.log("Choose an operation (+, -, *, /):");
    var operation = readline.question("");
    var result = performOperation(num1, num2, operation);
    if (!isNaN(result)) {
        console.log("Result: ".concat(result));
    }
    // Check if user wants to exit the program
    console.log("\nDo you want to exit the program? (y/n)");
    var exitInput = readline.question("");
    if (exitInput.toLowerCase() === "y") {
        console.log("Goodbye!");
        break;
    }
}
