import * as fs from "fs";
import * as readlineSync from "readline-sync";

// Load quiz data from JSON file
const quizData = JSON.parse(fs.readFileSync("quiz.json", "utf-8"));

// Function to start the quiz
function startQuiz() {
  console.log("Welcome to the Quiz!\n");

  // Display available topics
  console.log("Select a topic:");
  quizData.quiz.forEach((category: any, index: number) => {
    console.log(`${index + 1}) ${category.title}`);
  });

  // Get user's topic choice
  const topicIndex = readlineSync.questionInt("\nEnter the number of your topic: ") - 1;

  // Validate topic selection
  if (topicIndex < 0 || topicIndex >= quizData.quiz.length) {
    console.log("Invalid selection. Please restart the quiz.");
    return;
  }

  const selectedCategory = quizData.quiz[topicIndex];
  console.log(`\nYou selected: ${selectedCategory.title}`);
  let score = 0;
  const timeLimit = 5 * 1000; 

  // Start the quiz for the chosen topic
  selectedCategory.questions.forEach((q: any, index: number) => {
    console.log(`\nQ ${index + 1}: ${q.question}`);
    Object.entries(q.options).forEach(([key, value]) => console.log(`${key}) ${value}`));

    let answered = false;
    const startTime = Date.now();

    // Start timer
    const timer = setTimeout(() => {
      if (!answered) {
        console.log("\nTime's up! Moving to next question.");
      }
    }, timeLimit);

    // Get user answer within time
    const userAnswer = readlineSync.question("Your answer (a/b/c/d): ", {
      limit: input => /^[a-dA-D]$/.test(input),
      limitMessage: "Invalid choice! Please enter a/b/c/d.",
    }).toLowerCase();

    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < timeLimit) {
      clearTimeout(timer);
      answered = true;

      if (userAnswer === q.answer.toLowerCase()) {
        score++;
        console.log("Correct!\n");
      } else {
        console.log(`Incorrect! Correct answer: ${q.answer}\n`);
      }
    }

    console.log("Moving to next question in 5 seconds...\n");
    const nextWait = 5000;
    const waitStart = Date.now();
    while (Date.now() - waitStart < nextWait); 
  });

  console.log("Quiz Completed!", `\nYour final score is: ${score}/${selectedCategory.questions.length}\n`);
}

startQuiz();
