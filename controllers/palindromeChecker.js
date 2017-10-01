function palindromeChecker(string) {
  palindromeString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  for(x=0;x< (palindromeString.length)/2 ; x++) {
    if(palindromeString[x] != palindromeString.slice(-1-x)[0]){
      return false;
    }
  }
  return true;
}
module.exports = palindromeChecker;
