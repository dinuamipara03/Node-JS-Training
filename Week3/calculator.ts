// The objective is to create a simple calculator that operates in the console, capable of performing basic arithmetic operations: addition, subtraction, multiplication, and division. The program will prompt the user to input two numbers and select an operation. It will then compute and display the result, handling cases like division by zero gracefully.

// validate user input for numbers
import * as readline from 'readline-sync';
function validateNumber(input: string): number | null {
  const parsedNumber = parseFloat(input);
  if (isNaN(parsedNumber)) {
    console.log("Invalid input. Please enter a valid number.");
    return null;
  }
  return parsedNumber;
}

//arithmetic operations
function performOperation(num1: number, num2: number, operation: string): number {
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
  const num1Input = readline.question("Number 1: ");
  const num2Input = readline.question("Number 2: ");

  const num1 = validateNumber(num1Input);
  if (num1 === null) {
    continue;
  }

  const num2 = validateNumber(num2Input);
  if (num2 === null) {
    continue;
  }

  console.log("Choose an operation (+, -, *, /):");
  const operation = readline.question("");

  const result = performOperation(num1, num2, operation);
  if (!isNaN(result)) {
    console.log(`Result: ${result}`);
  }

  // Check if user wants to exit the program
  console.log("\nDo you want to exit the program? (y/n)");
  const exitInput = readline.question("");
  if (exitInput.toLowerCase() === "y") {
    console.log("Goodbye!");
    break;
  }
}