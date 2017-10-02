# Palindrome-database
### Requirement
Your task is build application that has a simple REST interface presenting two endpoints:
* An endpoint that accepts a string parameter, that will return true if the string is palindrome (and false otherwise)

* An endpoint that returns a list of the last 10 palindromes the system has received in the last 10 minutes. 

### How to install
```
gitclone https://github.com/adoolaeghe/Palindrome-database.git
cd Palindrome-database
npm install
 ```
#### Run the application
```
npm start
```
#### Run tests
```
npm test
```
#### Implementation

I decided to use Node/express to ensure that the application would be scalable following the REST rules. It was the first time I didn't use a database connection in a node application, and decided to simply store the list of palindromes in an array variable. I was also unfamiliar with timed persistence on the data, and decided to use a Timeout function that would retrieve the element of the data array after a specific amount of time.. 

Testing issue: 
I encountered some issues testing the maximum and timed capacity of palindromes. I used mocha/chai unit test for testing the response of defined routes. when testing the timed capacity, my initial intuition was to use the same timeout function within the tests, checking that a palindrome has been removed after 10 minutes. I used a sleepfor package that would pause the test for a specific amount of time, however I was stuck on using it without having to wait when running the tests. When testing the maximum capacity, I had difficulty making an expectation after a numerous amount of requests. With more time I would like to research more on the asynchonicity of mocha testing, having more control over the requests and expectation that I make.  
