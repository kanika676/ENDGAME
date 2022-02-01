var readlineSync = require('readline-sync');

//Welcome

function Welcome(){
var userName = readlineSync.question("What's your name ?" )
console.log("Welcome " + userName + " to DYK Harry Potter Universe");
}

//function Game
function Game(){
  for( var i=0; i<question.length; i++)
  {
    var currentQues = question[i];
    play(currentQues.question, currentQues.answer);
  } 
}

var question=[{
  question: "What house at hogwarts does Harry belong to? ",
  answer: "Gryffindor" 
},
{
   question: "What position does Harry play on his Quidditch team?",
  answer : "Seeker",
 },
   {
    question : "Dr Snape was leader of which house? ",
    answer : "Slytherin"
   },
   {
     question: "Which is the 3rd house of Hogwarts? ",
     answer : "Ravenclaw"
   },
   {
     question: "What character is played by Emma Watson ? ",
     answer: "Hermione Granger"
   }


]


//play function 
var score=0;//not to define in function
function play (question , answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(" you,re right! ");
    score = score + 1;
  }
  else
  {
   console.log(" you're wrong! ");
  }
  console.log("current score is " , score);
  console.log("-------------")
}

Welcome()
Game()