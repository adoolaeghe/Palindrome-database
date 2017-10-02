var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var isNotEmpty = require('./controllers/isNotEmpty');
var palindromeChecker = require('./controllers/palindromeChecker');
var palindromeDatabase = require('./controllers/palindromeDatabase');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/palindromes', function (req, res) {
  res.render('palindromes', { history: palindromes.map(function(data) {data.palindrome})
  });
});


app.post('/palindromes', function (req, res) {
  var string = req.body.name;
  if ((palindromeDatabase._list.length < 10) && palindromeChecker(string) && isNotEmpty(string)){
    palindromeDatabase(string);
    res.redirect('/');
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;
