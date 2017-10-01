var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var palindromes = [];
var timer = 600 * 1000;


function palindromeChecker(string) {
  palindromeString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  for(x=0;x< (palindromeString.length)/2 ; x++) {
    if(palindromeString[x] != palindromeString.slice(-1-x)[0]){
      return false;
    }
  }
  return true;
}

function addPalindrome(string) {
  if (palindromes.length < 10){
    palindromes.push({palindrome: string, timer: setTimeout(function() {palindromes.splice(0)}, time)
  });
  }
}

app.get('/palindromes', function (req, res) {
  console.log('here');
  res.render('index');

});

app.post('/palindromes', function (req, res) {
  var string = JSON.stringify(req.body.name);
  console.log(palindromes.length);
  if (palindromeChecker(string)) {
    addPalindrome(string);
  }
  res.redirect('/palindromes');
});

module.exports = app;
