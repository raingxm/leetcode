var lengthOfLongestSubstring = require('../3.js');
var assert = require("chai").assert;

describe("Longest Substring Without Repeating Characters", function() {
	it('simple string', function() {
		var input = "abcabcbb";
		var expect = 3;
		assert.equal(lengthOfLongestSubstring(input), expect);
	});

	it('same character string', function() {
		var input = "bbbbb";
		var expect = 1;
		assert.equal(lengthOfLongestSubstring(input), expect);
	});

	it('complex character string', function() {
		var input = "pwwkew";
		var expect = 3;
		assert.equal(lengthOfLongestSubstring(input), expect);
	});

	it('pass case', function() {
		var input = "bbtablud";
		var expect = 6;
		assert.equal(lengthOfLongestSubstring(input), expect);
	});

	it('failed case', function() {
		var input = "aab";
		var expect = 2;
		assert.equal(lengthOfLongestSubstring(input), expect);
	});
});