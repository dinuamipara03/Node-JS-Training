import * as readline from "readline";

class NumberGuessingGame {
  private targetNumber: number;
  private rl: readline.Interface;

  constructor() {
    this.targetNumber = Math.floor(Math.random() * 101); // Random number between 0-100
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  

  public start(): void {
    console.log("Guess a number between 0 and 100.");
    this.askGuess();
  }

  private askGuess(): void {
    this.rl.question("Enter your guess: ", (input) => {
      const userGuess = parseInt(input);

      if (isNaN(userGuess)) {
        console.log("Invalid input. Please enter a number.");
      } else if (userGuess < this.targetNumber) {
        console.log("Too low! Try again.");
      } else if (userGuess > this.targetNumber) {
        console.log("Too high! Try again.");
      } else {
        console.log(`Congratulations! You guessed the correct number: ${this.targetNumber}`);
        this.rl.close();
        return;
      }

      this.askGuess();
    });
  }
}
 
const game = new NumberGuessingGame();
game.start();
