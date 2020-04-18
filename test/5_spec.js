var longestPalindrome = require('../5.js');
var assert = require('chai').assert;

describe('Longest Palindromic Substring', function() {
  it('odd string', function() {
    var input = 'bb';
    assert.equal(longestPalindrome(input), 'bb');
  });

  it('even string', function() {
    var input = 'babad';
    assert.equal(longestPalindrome(input), 'bab');
  });

  it('odd string, cbbd', function() {
    var input = 'cbbd';
    assert.equal(longestPalindrome(input), 'bb');
  });
});
