var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name?");

console.log('Hi '+ userName + '!' + 'How well do you know Nikhil?' + 'Lets test you with a fun game');

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!! Lets move to the next Question");
    score = score + 1;
  } else {
    console.log("Oops!! You are wrong this time")
    score = score - 1;
  }
  console.log("current score: " , score);
  console.log("---------------------");
}

var questions = [{
  question: 'What is my Full Name?',
  answer:'Nikhil Savalgi'
},{
  question:'Which city do I live in?',
  answer:'Bengaluru'
},{
  question:'What is my favorite food?',
  answer:'Pizza'
},{
  question:'Which is my Favorite Anime?',
  answer:'Naruto'
},{
  question:'Who is my favorite Actor?',
  answer:'SRK'
}];

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log('Hurray!!! You scored' ,score);
