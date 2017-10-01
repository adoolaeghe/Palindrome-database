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


describe('Test GET route', function() {

  it('it should respond to the GET method', function() {
    return request(app).get("/palindromes").then(function(response) {
      expect(response.statusCode).to.equal(200);
    });
  });
});

describe('Test POST route', function() {
  it('it should response 200 to the post moethod with valid palindrome', function (done) {
    request(app)
    .post('/palindromes')
    .type(validPalindrome)
    .expect(200, done)
    .end(function(err, res) {
      done();
    });
  });

  it('it should response 400 to the post moethod with unvalid palindrome', function (done) {
    request(app)
    .post('/palindromes')
    .type(unvalidPalindrome)
    .expect(400, done)
    .end(function(err, res) {
      done();
    });
  });
});
