/*
'use strict';

alert('Hey there! My name is Kavdi. Welcome to my page About ME!!!!');
var questionName = prompt('what is your name?');
console.log('Hi ' + questionName + '. Let\'s see how well you know me.');
alert('Hi ' + questionName + '. Let\'s see how well you know me.');

var qlog = [];
console.log (qlog);
var answerlog = [];
console.log (answerlog);
var goodanswers = [];
console.log (goodanswers);
alert ('Hey there! Lets play a small guessing game so you can get to know me a little better! Please respond with Yes or No answer s.');

function questionOne() {
  var a = 'I have visited more than 12 different countries.';
  console.log (a);
  qlog.push (a);
  var ask = prompt(a);
  var res = ask.toUpperCase();

  if (res === 'YES' || res === 'Y') {goodanswers++; alert ('Correct!');}
  else if (res === 'NO' || res === 'N') {alert ('You are incorrect.');}
  else {alert ('YES OR NO ANSWERS ONLY!');}
  console.log (res);
  answerlog.push (res);
}

function questionTwo() {
  var a = 'Spanish is my first language.';
  var ask = prompt(a);
  var res = ask.toUpperCase();
  console.log (res);
  if (res === 'YES' || res === 'Y') {goodanswers++; alert ('Correct!');}
  else if (res === 'NO' || res === 'N') {alert ('You are incorrect.');}
  else {alert ('YES OR NO ANSWERS ONLY!');}
  console.log (res);
}

function questionThree() {
  var a = 'Basketball is my favorite sport.';
  var ask = prompt(a);
  var res = ask.toUpperCase();
  console.log (res);
  if (res === 'NO' || res === 'N') {
    goodanswers++; alert ('Correct!');
  } else if (res === 'YES' || res === 'Y') {
    alert ('You are incorrect.');
  } else {alert ('YES OR NO ANSWERS ONLY!');
  }
  console.log (res);
}

function questionFour() {
  var a = 'I have an addiction to watches.';
  var ask = prompt(a);
  var res = ask.toUpperCase();
  console.log (res);
  if (res === 'YES' || res === 'Y') {goodanswers++; alert ('Correct!');}
  else if (res === 'NO' || res === 'N') {alert ('You are incorrect.');}
  else {alert ('YES OR NO ANSWERS ONLY!');}
  console.log (res);
}

function questionFive() {
  var a = 'I am afraid of heights.';
  var ask = prompt(a);
  var res = ask.toUpperCase();
  console.log (res);
  if (res === 'NO' || res === 'N') {goodanswers++; alert ('Correct!');}
  else if (res === 'YES' || res === 'Y') {alert ('You are incorrect.');}
  else {alert ('YES OR NO ANSWERS ONLY!');}
  console.log (res);
}

function questionSix() {
  var a = 'Lets play a guessing game. What is my favorite number? You get 4 tries!';
  var answer = 22;
  for (var i = 0; i < 4; i++){
    var ask = prompt (a);
    console.log(ask);
    if (parseInt(ask) < 22) {
      alert ('You are guessing a little too low, try a higher number.');}
    else if (parseInt(ask) > 22)
  { alert ('You\'re guessing a little too high. Try a lower number.');}
    else if (parseInt(ask) === 22) {
      goodanswers++;
      alert ('You are correct! Good guess!');
      break;
    }else {
      alert('That is not a number.');
    }}}

function questionSeven() {
  var i = 0;
  for (i = 0; i < 6; i++) {
    var a = 'Can you guess what other countries I have lived in besides the USA?';
    console.log (a);
    qlog.push (a);
    var countries = ['NICARAGUA','GERMANY','ARGENTINA','BRAZIL','COSTA RICA','PANAMA','BELIZE','HONDURAS','FRANCE'];
    var ask = prompt (a);
    console.log (ask);
    answerlog.push (ask);
    if (countries.includes(ask.toUpperCase()))
   {alert ('Good guess! You\'re correct. ' + countries + ' , are the countries I have lived in.'); goodanswers++;
      i += 6;
    }else if (i < (6 - 1)) {
      console.log('here!!!', i);
      {alert ('Nope! Try again. You have' + (5 - i) + 'turns left.');}

    }else alert ('Better luck next time.');
  }}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

var finished = 'Thank you for playin! You got ' + goodanswers + ' out of 7 questions correct!';
alert (finished);
console.log (finished);
/*
