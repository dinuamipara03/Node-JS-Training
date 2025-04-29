"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var NumberGuessingGame = /** @class */ (function () {
    function NumberGuessingGame() {
        this.targetNumber = Math.floor(Math.random() * 101); // Random number between 0-100
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    NumberGuessingGame.prototype.start = function () {
        console.log("Guess a number between 0 and 100.");
        this.askGuess();
    };
    NumberGuessingGame.prototype.askGuess = function () {
        var _this = this;
        this.rl.question("Enter your guess: ", function (input) {
            var userGuess = parseInt(input);
            if (isNaN(userGuess)) {
                console.log("Invalid input. Please enter a number.");
            }
            else if (userGuess < _this.targetNumber) {
                console.log("Too low! Try again.");
            }
            else if (userGuess > _this.targetNumber) {
                console.log("Too high! Try again.");
            }
            else {
                console.log("Congratulations! You guessed the correct number: ".concat(_this.targetNumber));
                _this.rl.close();
                return;
            }
            _this.askGuess();
        });
    };
    return NumberGuessingGame;
}());
var game = new NumberGuessingGame();
game.start();
