'use strict';

 var qlog = [];
 console.log (qlog);
 var answerlog = [];
 console.log (answerlog);
 var goodanswers = []
 //**console.log (goodanswers)**
 alert ('Hey there! Lets play a small guessing game so you can get to know me a little better! Please respond with Yes or No answer s.');
 var a = 'I have visited more than 12 different countries.';
 console.log (a);
 qlog.push (a);
 var ask = prompt(a);
 var res = ask.toUpperCase();
 if (res === 'YES' || res === 'Y') {alert ('Correct!');}
 else if (res === 'NO' || res === 'N') {alert ('You are incorrect.');}
 else {alert ('YES OR NO ANSWERS ONLY!');}
 console.log (res);
 answerlog.push (res);

 var a = 'Spanish is my first language.';
 var ask = prompt(a);
 var res = ask.toUpperCase();
 console.log (res);
 if (res === 'YES' || res === 'Y') {alert ('Correct!');}
 else if (res === 'NO' || res === 'N') {alert ('You are incorrect.');}
 else {alert ('YES OR NO ANSWERS ONLY!');}
 console.log (res);

 var a = 'Basketball is my favorite sport.';
 var ask = prompt(a);
 var res = ask.toUpperCase();
 console.log (res);
 if (res === 'NO' || res === 'N') {alert ('Correct!');}
 else if (res === 'YES' || res === 'Y') {alert ('You are incorrect.');}
 else {alert ('YES OR NO ANSWERS ONLY!');}
 console.log (res);

 var a = 'I have an addiction to watches.';
 var ask = prompt(a);
 var res = ask.toUpperCase();
 console.log (res);
 if (res === 'YES' || res === 'Y') {alert ('Correct!');}
 else if (res === 'NO' || res === 'N') {alert ('You are incorrect.');}
 else {alert ('YES OR NO ANSWERS ONLY!');}
 console.log (res);

 var a = 'I am afraid of heights.';
 var ask = prompt(a);
 var res = ask.toUpperCase();
 console.log (res);
 if (res === 'NO' || res === 'N') {alert ('Correct!');}
 else if (res === 'YES' || res === 'Y') {alert ('You are incorrect.');}
 else {alert ('YES OR NO ANSWERS ONLY!');}
 console.log (res);

 var a = 'Lets play a guessing game. What is my favorite number? You get 4 tries!';
 var answer = 22;
 var i = 0;
 for (var i = 0; i < 4; i++){
   var ask = prompt (a);
   console.log(ask);
   if (ask < 22) {
     alert ('You are guessing a little too low, try a higher number.');}
   else if (ask > 22) {
     alert ('You\'re guessing a little too high. Try a lower number.');}
   else {
     alert ('You are correct! Good guess!');
     break;}
 }

  var a = 'Can you guess what other countries I have lived in besides the USA?';
  console.log (a);
  qlog.push (a);
  var countries = ['Nicaragua','Germany','Argentina','Brazil','Costa Rica','Panama','Belize','Honduras','France'];
  var opp = 6;
  for (i = 0; i < opp; i++) {
  var ask = prompt (a);
  var res = ask.toUpperCase();
  console.log (res);
  answerlog.push (res);}
  if (res === countries[0] || res === countries [1] || res === countries [2] || res === countries [3]
 || res === countries [4] || res === countries [5]
 || res === countries [6] || res === countries [7] || res === countries [8])
 {
   goodanswers++;
 alert ('Good guess! You\'re correct.');
 break;
 }
 else if (i < (opp - 1))
 {(alert ('Nope! Try again. You have' + ((opp - 1) - i) + 'turns left.');}
 else { alert ('Better luck next time.');}
