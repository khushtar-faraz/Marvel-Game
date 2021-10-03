var readLineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readLineSync.question(chalk.blue.underline.bold("What is your NAME? "))
var score = 0;
var highScores = [
  {
    name: "Rahman",
    score: 4,
  },

  {
    name: "Abuzar",
    score: 3,
  },
  {
    name: "Nehal",
    score: 2
  }
]
function welcome() {
  console.log(chalk.magenta.underline.bold("Welcome " + userName + " to MCU trivia! "))
  console.log(chalk.blue.underline.bold("Lets Start!!"))
}
var questions = [
  {
    question: "IRON MAN: What song plays at the beginning of the movie? ",
    answer: "Back In Black by AC/DC "
  },
  {
    question: "THE INCREDIBLE HULK: What does Tony tell Thaddeus Ross at the end of the film? ",
    answer: "That they are putting a team together"
  },
  {
    question: "IRON MAN 2: What fake name does Natasha use when she first meets Tony? ",
    answer: "Natalie Rushman"
  },
  {
    question: "CAPTAIN AMERICA: THE FIRST AVENGER: Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice? ",
    answer: "The Stork Club"
  },
  {
    question: "THE AVENGERS: Natasha remarks to Clint that the Battle of New York is a lot like what? ",
    answer: "Their time in Budapest"
  }

]
function play(question, answer) {
  var userAnswer = readLineSync.question(chalk.bgYellow.underline.bold(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.underline.bold("You are right"))
    score++;
  } else {
    console.log(chalk.red.underline.bold("You are Wrong!"))
  }
  console.log(chalk.blue.underline.bold("Current score: " + score))
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log(chalk.blue.underline.bold("YAY! You SCORED: ", score));

  console.log(chalk.blue.underline.bold("Check out the high scores, if you should be there ping me and I'll update it"));
  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome()
game()
showScores()