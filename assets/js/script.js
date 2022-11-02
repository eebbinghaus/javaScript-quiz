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
var score = 0;
var questionArr = [
  {
    title: "What color is the sky?",
    choices: ["1. blue", "2. red", "3. yellow", "4. green"],
    answer: "blue",
  },
  {
    title: "What color is grass?",
    choices: ["1. red", "2. blue", "3. green", "4. yellow"],
    answer: "green",
  },
];

start.addEventListener("click", function () {
  question.textContent = questionArr[0].title;
  choice1.textContent = questionArr[0].choices[0];
  choice2.textContent = questionArr[0].choices[1];
  choice3.textContent = questionArr[0].choices[2];
  choice4.textContent = questionArr[0].choices[3];

  start.style.display = "none";
  document.getElementById("possible").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
});

choice1.addEventListener("click", function () {
  response.textContent = "Correct!";
  score = score + 10;
  userScore.textContent = score;
});

choice2.addEventListener("click", function () {
  response.textContent = "Oops! looks like you got that one wrong!";
});

choice3.addEventListener("click", function () {
  response.textContent = "Oops! looks like you got that one wrong!";
});

choice4.addEventListener("click", function () {
  response.textContent = "Oops! looks like you got that one wrong!";
});

next.addEventListener("click", function () {
  response.style.display = "none";
  question.textContent = questionArr[1].title;
  choice1.textContent = questionArr[1].choices[0];
  choice2.textContent = questionArr[1].choices[1];
  choice3.textContent = questionArr[1].choices[2];
  choice4.textContent = questionArr[1].choices[3];
});

choice1.addEventListener("click", function () {
  response.textContent = "Oops! looks like you got that one wrong!";
});

choice2.addEventListener("click", function () {
  response.textContent = "Oops! looks like you got that one wrong!";
});

choice3.addEventListener("click", function () {
  response.textContent = "Correct!";
  score = score + 10;
  userScore.textContent = score;
});

choice4.addEventListener("click", function () {
  response.textContent = "Oops! looks like you got that one wrong!";
});
