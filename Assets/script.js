// Retrieving elements from the DOM
var startQuizEl = document.querySelector("#start-quiz");
var questions = document.querySelector("#questions");
var intro = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");

// Initial timer value
var timer = 50;

// Array of quiz questions with choices and answers
var question = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "String values must be enclosed within_______when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugger is:",
    choices: ["JavaScript", "curly terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
  {
    question: "Arrays is JavScript can be used to store",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
  },
  {
    question: "The conditiod in an if/else stataement is enclosed with _________.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets",
  },
];

// Index to keep track of the current question being displayed
var questionIndex = 0;

// Function to start the timer
function startTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      timerEl.textContent = timer;
    } else {
      endQuiz();
    }
  }, 1000);
}

// Function to start the quiz
function startQuiz() {
  intro.setAttribute("class", "hide");
  updateQuestion();
  questions.setAttribute("class", "show");
  timerEl.setAttribute("class", "show");
  startTimer();
}

// Function to update question
function updateQuestion() {
  if (questionIndex === question.length) {
    setTimeout(endQuiz, 1500);
    return;
  }

  questionEl.textContent = question[questionIndex].question;
  choicesEl.innerHTML = "";
  resultEl.innerHTML = "";
  for (var i = 0; i < question[questionIndex].choices.length; i++) {
    var element = document.createElement("li");
    element.textContent = question[questionIndex].choices[i];
    choicesEl.appendChild(element);
  }
}

// Function to end the quiz
function endQuiz() {
  questions.setAttribute("class", "hide");
  resultEl.textContent = "All Done";
  timerEl.setAttribute("class", "hide");
}

choicesEl.addEventListener("click", function (event) {
  var target = event.target;

  if (target.matches("li")) {
    if (target.textContent === question[questionIndex].answer) {
      resultEl.textContent = "Correct!";
    } else {
      resultEl.textContent = "Wrong!";
      timer = timer - 5;
    }

    questionIndex++;

    setTimeout(updateQuestion, 1500);
  }
});

startQuizEl.addEventListener("click", startQuiz);












