let quizDiv = document.getElementById("quiz");
let resultsDiv = document.getElementById("results");

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

  let currentTime = 75;
  let timeText = document.getElementById("pageTimer");

  
  function timer(){
    let currentTime = 75;
    let myTime = setInterval(changeTime,1000);
    return myTime;
    }
  

  function changeTime(){
    if(currentTime>-1){
      timeText.textContent = ("Time = "+currentTime);
      currentTime = currentTime - 1;
    }else{
      clearInterval(myTime);
    }
    }

    var quizHide = document.getElementById("quiz");

    quizHide.style.display = "none";

    function buildQuiz(){
      timer();
      questions.forEach(questionMaker);
      hider = 1;
      var start = document.getElementById("start");
      if (start.style.display === "none") {
        start.style.display = "block";
      } else {
        start.style.display = "none";
      }
      quizHide.style.display = "block";
    }

let page = 0;
    
    

function questionMaker(){
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

