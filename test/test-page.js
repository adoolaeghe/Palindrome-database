var expect  = require('chai').expect;
var request = require('superagent');
var app = require('./app');
var palindrome = 'ollo';
describe('Status and content', function() {
  it('Main page content', function() {
      request('http://localhost:3000' , function(error, response, body) {
          expect(body).to.equal('Hello World');
      });
  });

  it('Main page status', function() {
      request('http://localhost:3000' , function(error, response, body) {
          expect(response.statusCode).to.equal(200);
      });
  });

  describe ('Palindromes page', function() {
        it('status', function(){
            request('http://localhost:3000/palindromes', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
            });
        });
    });
});
