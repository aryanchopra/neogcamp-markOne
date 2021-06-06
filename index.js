var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ");
console.log("Welcome " + userName + " to a questionnaire on how well you know Aryan Chopra!");
var score=0;

function ask(question, answer){
  var ans = readLineSync.question(question);
  if(ans.toLowerCase()===answer.toLowerCase()){
    console.log('Correct answer!');
    score=score+1;
  }
  else{
    console.log("Boo! Wrong Answer!");
    score=score-1;
  }
  console.log("------------------");
  console.log("Your current score is: "+score);
}


var questions = [{question:"\nWhich college was Aryan in? " , answer: "MUJ" }, {question:"What sport does Aryan play? " , answer:"Basketball"}, {question:"What is Aryan's favourite food? \nRajma Chawal or Butter Chicken? " , answer: "Both" }, {question: "Who is Aryan's favorite sportsperson " , answer: "Lebron James"}, {question: "Is Aryan a cat person or a dog person? " , answer: "Cat"}]

for(let i=0;i<questions.length;i++){
  ask(questions[i].question,questions[i].answer)
}
console.log("Thank you for playing "+userName+"!");
console.log("You scored "+score+"/5 points!");