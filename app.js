var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var addPalindrome = require('./controllers/addPalindrome');
var isNotEmpty = require('./controllers/isNotEmpty');
var palindromeChecker = require('./controllers/palindromeChecker');
var palindromesCapacityCheck = require('./controllers/palindromesCapacityCheck');
var Palindromes = require('./controllers/palindrome');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var palindromes = [];
var timer = 600 * 1000;

console.log(isNotEmpty('string'))
console.log(Palindromes.collection);

app.get('/palindromes', function (req, res) {
  console.log('here');
  res.render('index');
});

app.post('/palindromes', function (req, res) {
  var string = JSON.stringify(req.body.name);
  console.log(palindromes.length);
  if (palindromesCapacityCheck() && palindromeChecker(string) && isNotEmpty(string)) {
    addPalindrome(string);
    res.redirect('/palindromes');
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;
