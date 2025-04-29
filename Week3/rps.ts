import * as readline from "readline";

class RockPaperScissors {
  private choices: string[] = ["rock", "paper", "scissors"];
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public start(): void {
    this.rl.question("Enter rock, paper, or scissors: ", (userInput) => {
      const userChoice = userInput.toLowerCase();

      if (!this.choices.includes(userChoice)) {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        this.rl.close();
        return;
      }

      const computerChoice = this.getComputerChoice();
      console.log(`Computer chose: ${computerChoice}`);

      this.winner(userChoice, computerChoice);
      this.rl.close();
    });
  }

  private getComputerChoice(): string {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  private winner(userChoice: string, computerChoice: string): void {
    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("Computer wins!");
    }
  }
}

// Start the game
const game = new RockPaperScissors();
game.start();
