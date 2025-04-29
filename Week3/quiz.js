"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
// Load quiz data from JSON file
var quizData = JSON.parse(fs.readFileSync("quiz.json", "utf-8"));
// Function to start the quiz
function startQuiz() {
    console.log("Welcome to the Quiz!\n");
    // Display available topics
    console.log("Select a topic:");
    quizData.quiz.forEach(function (category, index) {
        console.log("".concat(index + 1, ") ").concat(category.title));
    });
    // Get user's topic choice
    var topicIndex = readlineSync.questionInt("\nEnter the number of your topic: ") - 1;
    // Validate topic selection
    if (topicIndex < 0 || topicIndex >= quizData.quiz.length) {
        console.log("Invalid selection. Please restart the quiz.");
        return;
    }
    var selectedCategory = quizData.quiz[topicIndex];
    console.log("\nYou selected: ".concat(selectedCategory.title));
    var score = 0;
    var timeLimit = 5 * 1000;
    // Start the quiz for the chosen topic
    selectedCategory.questions.forEach(function (q, index) {
        console.log("\nQ ".concat(index + 1, ": ").concat(q.question));
        Object.entries(q.options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return console.log("".concat(key, ") ").concat(value));
        });
        var answered = false;
        var startTime = Date.now();
        // Start timer
        var timer = setTimeout(function () {
            if (!answered) {
                console.log("\nTime's up! Moving to next question.");
            }
        }, timeLimit);
        // Get user answer within time
        var userAnswer = readlineSync.question("Your answer (a/b/c/d): ", {
            limit: function (input) { return /^[a-dA-D]$/.test(input); },
            limitMessage: "Invalid choice! Please enter a/b/c/d.",
        }).toLowerCase();
        var elapsedTime = Date.now() - startTime;
        if (elapsedTime < timeLimit) {
            clearTimeout(timer);
            answered = true;
            if (userAnswer === q.answer.toLowerCase()) {
                score++;
                console.log("Correct!\n");
            }
            else {
                console.log("Incorrect! Correct answer: ".concat(q.answer, "\n"));
            }
        }
        console.log("Moving to next question in 5 seconds...\n");
        var nextWait = 5000;
        var waitStart = Date.now();
        while (Date.now() - waitStart < nextWait)
            ;
    });
    console.log("Quiz Completed!", "\nYour final score is: ".concat(score, "/").concat(selectedCategory.questions.length, "\n"));
}
startQuiz();
