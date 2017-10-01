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
  for(x=0;x< (string.length)/2 ; x++) {
    if(string[x] != string.slice(-1-x)[0]){
      return false;
    }
  }
  return true;
}

function addPalindrome(string) {
  if (palindromes.length < 10){
    palindromes.push({q: string, pid: setTimeout(() => palindromes.shift(), time)})
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
