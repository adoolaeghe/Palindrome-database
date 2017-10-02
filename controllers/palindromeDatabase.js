var PalindromeDatabase = function() {
  this._list = [];
  this._timer = 600 * 1000;
};

PalindromeDatabase.prototype.addPalindrome = function(palindrome) {
  this._list.push({palindrome: string,
      timer: setTimeout(function() {this._list.splice(0)}, this._timer)})
  };


module.exports = PalindromeDatabase;
