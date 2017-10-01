var expect  = require('chai').expect;
var request = require('supertest');
var app = require('../app');
var palindrome = 'ollo';


describe('Test the root path', function() {

  it('It should response the GET method', function() {
    return request(app).get("/palindromes").then(function(response) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('Returns 200  for request type', function (done) {
    request(app)
    .post('/palindromes')
    .type(palindrome)
    .expect(200, done)
    .end(function(err, res) {
      done();
    });
  });
});
