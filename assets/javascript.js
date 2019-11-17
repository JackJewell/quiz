let quizDiv = document.getElementById("quiz");
let resultsDiv = document.getElementById("results");
let currentTime = 75;
let timeText = document.getElementById("pageTimer");
var quizHide = document.getElementById("quiz"); 
var scoreHide = document.getElementById("highScores"); 
var highHide = document.getElementById("high"); 
var start = document.getElementById("start");
var message = document.getElementById("message"); 
var board = document.getElementById("board");
var initialStorage = localStorage.getItem("initials");
let page = 0;
let scoreNum =0;
let answerFinal;
let myTime;
quizHide.style.display = "none";
scoreHide.style.display = "none";
message.style.display = "none";

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
    {
      title: "Inside which HTML element do we put the JavaScript?",
      choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
      answer: "<script>"
    },
    {
      title: "How do you write 'Hello World' in an alert box?",
      choices: ["msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
      answer: "alert('Hello World');"
    },
    {
      title: "How does a FOR loop start?",
      choices: ["for(i = 0; i<=5)", "for(i <= 5; i++)", "for(i = 0; i<=5; i++)", "for i = 1 to 5"],
      answer: "for(i <= 5; i++)"
    }
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
  //hide the high scores page
  scoreHide.style.display = "none";
  //show the quiz questions
  quizHide.style.display = "block";
}

function timer(){
  //starts the timer
  let currentTime = 75;
  myTime = setInterval(changeTime,1000);
  return myTime;
  }
  

function changeTime(){
  //updates the timer text
    if(currentTime>-1){
      timeText.textContent = ("Time = "+currentTime);
      currentTime = currentTime - 1;
    }else{
      timeText.textContent = ("Time = 0");
      saveScore();
    }
  }


function questionMaker(){
  //builds the question on the screen
    for(var i = 0; i < 4;){
      let qLabels = document.querySelectorAll("button");
      let qHeader = document.getElementById("questionText");
      qHeader.textContent = (questions[page].title);
      qLabels[i].setAttribute("value", questions[page].choices[i])
      qLabels[i].textContent=(questions[page].choices[i]);
      message.style.display = "none";
      i++;
    }
  }

  function answerTracker(x){
    answerFinal = x.textContent;
    if(answerFinal === questions[page].answer){
      message.textContent = "Correct!"
      message.style.display = "block";
    }else{
      message.textContent = "Wrong!"
      message.style.display = "block";
      currentTime = currentTime - 15;
    }
    page++;
    if(page < 5){
    setTimeout(questionMaker,1000);
    }else{
      clearInterval(myTime);
      saveScore();
    }
  }

  function saveScore(){
    scoreNum = currentTime;
    timeText.textContent = ("Time = "+currentTime);
    quizHide.style.display = "none";
    scoreHide.style.display = "block";
    //brings up a form that allows the user to input their name
    return scoreNum;
  }

  function showScores(){
    quizHide.style.display = "none";
    scoreHide.style.display = "block";
  }

 function saveInitials(){
    event.preventDefault();
    var inputInitials= document.getElementById("initials").value;
    inputInitials = inputInitials+": "+scoreNum;
    console.log(inputInitials);
    localStorage.setItem("initials", inputInitials);
    buildBoard();
 }


 function buildBoard(){
   var x = initialStorage.length;
   for(var i;i>x;){
     var person = document.createElement("li");
        person.textContent = initialStorage[i];
        board.appendChild(person);
        i++;
   }
 }
 