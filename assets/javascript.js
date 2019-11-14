let quizDiv = document.getElementById("quiz");
let resultsDiv = document.getElementById("results");
let currentTime = 75;
let timeText = document.getElementById("pageTimer");
var quizHide = document.getElementById("quiz"); 
var scoreHide = document.getElementById("highScores"); 
var highHide = document.getElementById("high"); 
var start = document.getElementById("start");
let page = 0;
let scoreNum;
quizHide.style.display = "none";
scoreHide.style.display = "none";

let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];

function buildQuiz(){
  //builds the quiz
  //trigger timer
  timer();
  //build the questions
  questions.forEach(questionMaker);
  //hide the start button
  start.style.display = "none";
  //hide the high scores button
  highHide.style.display = "none";
  //show the quiz questions
  quizHide.style.display = "block";
}

function timer(){
  //starts the timer
  let currentTime = 75;
  let myTime = setInterval(changeTime,1000);
  return myTime;
  }
  

function changeTime(){
  //updates the timer text
    if(currentTime>-1){
      timeText.textContent = ("Time = "+currentTime);
      currentTime = currentTime - 1;
    }else{
      clearInterval(myTime);
    }
  }

    



function questionMaker(){
  //builds the question on the screen
    for(var i = 0; i < 4;){
      let qLabels = document.querySelectorAll("input");
      let qAnswers = document.querySelectorAll("p");
      let qHeader = document.getElementById("questionText");
      qHeader.textContent = (questions[page].title);
      qLabels[i].setAttribute("type","radio");
      qLabels[i].setAttribute("name", "question"+i);
      qLabels[i].setAttribute("value",questions[page].choices[i]);
      qAnswers[i].textContent=(questions[page].choices[i]);
      i++;
    }
  }

  function score(){
    scoreNum = currentTime;
  }

  function saveScore(){
    //brings up a form that allows the user to input their name, then stores it on the scoreboard
  }

  function showScores(){
    //brings up the high scores page
  }
