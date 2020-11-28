var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question('Enter Your Name Here : ');
var userScore = 0;
console.log(chalk.bgCyan.bold.black.underline('\nWelcome '+userName.toUpperCase()+' to the DRAGON BALL QUIZ game ? \n'));

//instructions:
console.log("\n"+chalk.bgYellow.black.bold('INSTRUCTIONS :'));
console.log(chalk.yellow.bold("\n1. There will be 10 Questions with 4 options each."));
console.log(chalk.yellow.bold("2. If Your answer is option a then just type 'a' to answer"));
console.log(chalk.yellow.bold("3. For each correct answer you will get 1 point."));
console.log(chalk.yellow.bold("4. For wrong answer no points will be given."));
console.log(chalk.yellow.bold("5. Beat HIGH SCORE and send screenshot.\n"));
console.log("____________________________________________\n");
function play(question,answer) {
  var userAnswer = readlineSync.question(chalk.bold.cyan(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright.bold('CORRECT'));
    userScore++;
  }else {
    console.log(chalk.redBright.bold('WRONG'));
  }
  console.log("score : " + userScore);
  console.log("____________________________________________\n");
}


var questions = [{
  question: "Q1. Who is the main character of DRAGON BALL UNIVERSE ?\n      a. VEGETA\n      b. PICCOLO\n      c. GOKU\n      d. MAJIN-BU\n\nAns : ",
  answer: "c"
},
{
  question: "Q2. What is the other name of GOKU ?\n      a. SAIYAN\n      b. DENDE\n      c. TRUNKS\n      d. KAKKAROT\n\nAns : ",
  answer: "d"
},
{
  question: "Q3. who calls himself as PRINCE of all SAIYANS ?\n      a. VEGETA\n      b. BROLY\n      c. TRUNKS\n      d. GOKU\n\nAns : ",
  answer: "a"
},
{
  question: "Q4. who is the wife of VEGETA ?\n      a. CHI-CHI\n      b. BULMA\n      c. VIDEL\n      d. ANDROID 18\n\nAns : ",
  answer: "b"
},
{
  question: "Q5. Who is the god of DESTRUCTION of UNIVERSE 7 ?\n      a. VEGETA\n      b. BERUS\n      c. WHEESE\n      d. ZENO\n\nAns : ",
  answer: "b"
},
{
  question: "Q6. Who is not a SAIYAN ?\n      a. GOKU\n      b. VEGETA\n      c. BROLY\n      d. PICCOLO\n\nAns : ",
  answer: "d"
},
{
  question: "Q7. what is used to summon the eternal dragon ?\n      a. KA-ME-HA-ME-HA\n      b. FUSION\n      c. DRAGON-BALLS\n      d. SPIRIT-BOMB\n\nAns : ",
  answer: "c"
},
{
  question: "Q8. who destroyed planet VEGETA ?\n      a. GOKU\n      b. VEGETA\n      c. BERUS\n      d. FREEZA\n\nAns : ",
  answer: "d"
},
{
  question: "Q9. who is the best friend of GOKU ?\n      a. VEGETA\n      b. KRILLIN\n      c. WHEESE\n      d. ZENO\n\nAns : ",
  answer: "b"
},
{
  question: "Q10. who is the mightiest of all ?\n      a. VEGETA\n      b. BERUS\n      c. GOKU\n      d. ZENO\n\nAns : ",
  answer: "d"
}
];

for(var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log('Your Score  \n'+userName+' : '+userScore+'\n');
console.log('High Score  \n'+'Raj : '+'10');
