var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ");
console.log("Welcome " + userName + " to a questionnaire on how well you know Aryan Chopra!");
var score=0;

function ask(question, answer){
  var ans= readLineSync.question(question);
  if(ans===answer){
    console.log('Correct answer! You know me ;)');
    score=score+1;
  }
  else{
    console.log("Boo! You don't know me that well!");
    score=score-1;
  }
  console.log("------------------");
  console.log("Your current score is: "+score);
}


ask("What is my favourite food? \nRajma Chawal or Butter Chicken? ","Both");