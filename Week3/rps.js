"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var RockPaperScissors = /** @class */ (function () {
    function RockPaperScissors() {
        this.choices = ["rock", "paper", "scissors"];
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    RockPaperScissors.prototype.start = function () {
        var _this = this;
        this.rl.question("Enter rock, paper, or scissors: ", function (userInput) {
            var userChoice = userInput.toLowerCase();
            if (!_this.choices.includes(userChoice)) {
                console.log("Invalid choice. Please enter rock, paper, or scissors.");
                _this.rl.close();
                return;
            }
            var computerChoice = _this.getComputerChoice();
            console.log("Computer chose: ".concat(computerChoice));
            _this.determineWinner(userChoice, computerChoice);
            _this.rl.close();
        });
    };
    RockPaperScissors.prototype.getComputerChoice = function () {
        var randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    };
    RockPaperScissors.prototype.determineWinner = function (userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log("It's a tie!");
        }
        else if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!");
        }
        else {
            console.log("Computer wins!");
        }
    };
    return RockPaperScissors;
}());
// Start the game
var game = new RockPaperScissors();
game.start();
