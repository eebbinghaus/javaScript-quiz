// Global Variables

var start = document.getElementById("start");
var question = document.getElementById("para");
var possible = document.getElementById("possible");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var response = document.getElementById("response");
var next = document.getElementById("next");
var userScore = document.getElementById("score");
var finalScore = document.getElementById("finalScore");
var scoreStart = document.getElementById("scoreStart");
var saveScore = document.getElementById("saveScore");
var timer = document.querySelector(".timer");
var userName = document.getElementById("userName");
var highScore = document.getElementById("highScore");
var display = document.getElementById("display");
var score = 0;
var indexTracker = 0;
var saveArray;
var questionArr = [
  {
    title: "JavaScript arrays are written with ____ brackets?",
    choices: [" {} ", " <> ", " () ", " [] "],
    answer: " [] ",
  },
  {
    title: "When multiplying in JavaScript we use which operator ____?",
    choices: [" x ", " * ", " % ", " / "],
    answer: " * ",
  },
  {
    title: "We seperate JavaScript statements using _____?",
    choices: ["semicolons ;", "forward slashes /", "commas ,", "colons :"],
    answer: "semicolons ;",
  },
  {
    title: "Single line comments in JavaScript start with _____?",
    choices: [
      "round brackets ()",
      "curly brackets {}",
      "forward slashes //",
      "exclamation marks !!",
    ],
    answer: "forward slashes //",
  },
  {
    title:
      "Arrays in JavaScript are defined by which of the following statements?",
    choices: [
      "It is an ordered list of values",
      "It is an ordered list of objects",
      "It is an ordered list of strings",
      "It is an ordered list of functions",
    ],
    answer: "It is an ordered list of values",
  },
  {
    title:
      "Which of the following can be used to call a JavaScript code snippet?",
    choices: ["Triggering Event", "Preprocessor", "RMI", "Function / Method"],
    answer: "Function / Method",
  },
];

function checkLocalStorage() {
  if (localStorage.length === 0) {
    saveArray = [];
  } else {
    saveArray = JSON.parse(localStorage.getItem("High Scores"));
  }
  return saveArray;
}

// Hiding elements at start of game
timer.style.visibility = "visible";
userFinal.style.visibility = "hidden";
scoreStart.style.visibility = "hidden";
form.style.display = "none";

checkLocalStorage();

start.addEventListener("click", startGame);

// Function that controls my countdown timer
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left!";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
// Game Starts
function startGame() {
  setTime();
  nextQuestion();
  scoreStart.style.visibility = "visible";
  start.style.display = "none";
  document.getElementById("possible").style.visibility = "visible";
}
// Game ends
function endGame() {
  possible.style.visibility = "hidden";
  question.style.visibility = "hidden";
  response.style.visibility = "hidden";
  next.style.visibility = "hidden";
  scoreStart.style.visibility = "hidden";
  userFinal.style.visibility = "visible";
  finalScore.style.visibility = "visible";
  form.style.display = "flex";
  finalScore.textContent = score;
  timer.style.visibility = "hidden";
}

saveScore.addEventListener("click", submitScore);
// Saves high score
function submitScore(event) {
  event.preventDefault();
  var userHighScore = " " + userName.value + " - " + score + "        ";
  console.log(saveArray);
  saveArray = saveArray.concat(userHighScore);
  localStorage.setItem("High Scores", JSON.stringify(saveArray));
  console.log(saveArray);
}

highScore.addEventListener("click", seeScores);
// View High Scores
function seeScores(event) {
  event.preventDefault();
  var finalHighScores = JSON.parse(localStorage.getItem("High Scores"));
  liElement = document.createElement("p");
  liElement.textContent = finalHighScores;
  display.append(liElement);
}
// Loads questions
function nextQuestion() {
  response.style.visibility = "hidden";

  question.textContent = questionArr[indexTracker].title;
  choice1.textContent = questionArr[indexTracker].choices[0];
  choice2.textContent = questionArr[indexTracker].choices[1];
  choice3.textContent = questionArr[indexTracker].choices[2];
  choice4.textContent = questionArr[indexTracker].choices[3];

  possible.addEventListener("click", checkAnswer);
}
// Checks the user answer
function checkAnswer() {
  next.style.visibility = "visible";
  var userInput = event.target.textContent;
  var correctAnswer = questionArr[indexTracker].answer;
  if (userInput === correctAnswer) {
    response.textContent = "Correct!";
    response.style.visibility = "visible";
    score = score + 10;
    userScore.textContent = score;
  } else {
    response.textContent = "Oops! looks like you got that one wrong!";
    response.style.visibility = "visible";
    secondsLeft = secondsLeft - 10;
    userScore.textContent = score;
  }
  indexTracker++;
  if (indexTracker >= questionArr.length) {
    next.style.display = "none";
    endGame();
  } else {
    // nextQuestion();
    next.addEventListener("click", nextQuestion);
  }
}
