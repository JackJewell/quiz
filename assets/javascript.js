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
  
  function quiz(){
    timer();
  }

  let currentTime= 75;
  let timeText = document.getElementById("pageTimer");

  
  function timer(){
    let myTime = setInterval(changeTime,1000);
    }
  

  function changeTime(){
    if(currentTime>-1){
      timeText.textContent = ("Time = "+currentTime);
      currentTime = currentTime - 1;
    }else{
      clearInterval(myTime);
    }
    }
