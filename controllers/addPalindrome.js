function addPalindrome(string) {
  palindromes.push({palindrome: string, timer: setTimeout(function() {palindromes.splice(0)}, timer)})
}
module.exports = addPalindrome;
