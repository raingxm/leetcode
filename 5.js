// Longest Palindromic Substring

var longestPalindrome = function(s) {
  let findStr = '';
  let trackHistory = [];
  for (let i = s.length - 1; i >=0; i--) {
    trackHistory[i] = [];
    for (let j = i; j < s.length; j++) {
      const currentWord = s.slice(i, j + 1);
      if (i === j) {
        trackHistory[i][j] = true;
      } else if (j === i + 1) {
        trackHistory[i][j] = s[i] === s[j];
      } else {
        trackHistory[i][j] = trackHistory[i + 1][j - 1] && s[i] === s[j]
      }

      if (trackHistory[i][j] && currentWord.length >= findStr.length) {
        findStr = currentWord;
      }
    }
  }
  return findStr;
};

module.exports = longestPalindrome;
