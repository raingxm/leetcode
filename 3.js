var lengthOfLongestSubstring = function(s) {
  var maxSubStr = "";
  var startIndex = 0;
  var endIndex = 0;
  var maxLength = 0;
  for (var i = 0; i < s.length; i++) {
  	if (maxSubStr.indexOf(s[i]) === -1) {
  		endIndex = i;
  		maxSubStr += s[i];
      if (maxSubStr.length > maxLength) {
        maxLength = maxSubStr.length;  
      }
  	} else {
      startIndex = maxSubStr.lastIndexOf(s[i]) + 1;
      maxSubStr += s[i];
      maxSubStr = maxSubStr.substring(startIndex);
  	}
  }

  return maxLength;
};

module.exports = lengthOfLongestSubstring
