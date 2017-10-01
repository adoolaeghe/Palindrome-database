var expect  = require('chai').expect;
var request = require('supertest');
var app = require('../app');
var validPalindrome = 'Dennis, Nell, Edna, Leon, Nedra, Anita,' +
                      'Rolf, Nora, Alice, Carol, Leo, Jane, Reed,' +
                      'Dena, Dale, Basil, Rae, Penny, Lana, Dave, ' +
                      'Denny, Lena, Ida, Bernadette, Ben, Ray, Lila,'+
                      ' Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina,'+
                      ' Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed,'+
                      ' Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee,'+
                      ' Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden,'+
                      ' Noel, and Ellen sinned.';
var unvalidPalindrome = 'Hello World';
var emptyString = "";


describe('Test GET route', function() {

  it('should respond to the GET method', function() {
    return request(app).get("/").then(function(response) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should have not palindrome by default', function (done) {
    request(app).get('/palindromes').expect([], done);
  });
});

describe('Test POST route', function() {
  it('should respond 200 when posting a valid palidrome', function (done) {
    request(app).post('/palindromes').type(validPalindrome).expect(200, done).end(function(err, res) {
      done();
    });
  });

  it('should respond 400 when posting an unvalid palindrome', function (done) {
    request(app).post('/palindromes').type(unvalidPalindrome).expect(400);
  });

  it('should respond 400 when posting an empty string', function (done) {
    request(app).post('/palindromes').type(emptyString).expect(400, done).end(function(err, res) {
      done();
    });
  });

  it('should remove the palindrome after 10minutes', function(done) {
    setTimeout(function () {
      request(app).get('/palindromes').expect([], done);
    }, 400);
  });
});


describe("capacity", function(){
  var foo = false;
  beforeEach(function(done){
    var promise = new WinJS.Promise(function(complete){
      complete(true);
    });
    promise.then(function(value){
      // get the value from the completed promise
      foo = value;
      // complete the async beforeEach
      done();
    });

  });

  it("should pass", function(){
    expect(foo).equals(true);
  });
});
