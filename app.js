var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var isNotEmpty = require('./controllers/isNotEmpty');
var palindromeChecker = require('./controllers/palindromeChecker');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var palindromes = [];
var timer = 600 * 1000;

console.log(isNotEmpty('string'))
console.log(palindromes)

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/palindromes', function (req, res) {
  res.render('palindromes', { history: palindromes.map(data => data.palindrome)});
});

app.post('/palindromes', function (req, res) {
  var string = req.body.name;
  if ((palindromes.length < 10) && palindromeChecker(string) && isNotEmpty(string)) {
    palindromes.push({palindrome: string,
                      timer: setTimeout(function() {palindromes.splice(0)}, timer)})
    res.redirect('/');
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;
