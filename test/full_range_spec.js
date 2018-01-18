var fullRange = require('../full_range.js');
var assert = require("chai").assert;

describe("Longest Substring Without Repeating Characters", function() {
  it('should works fine for single element', function () {
    let numbers = [1],
      expect = [[1]];
    let actual = fullRange(numbers);
    assert.deepEqual(expect, actual);
  });

  it('should get work for two elements', function () {
    let numbers = [1, 2],
      expect = [[1, 2], [2, 1]];
    let actual = fullRange(numbers);
    assert.deepEqual(expect, actual);
  });

  it('should get work more than three elements', function () {
    let numbers = [1, 2, 3],
      expect = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ];
    let actual = fullRange(numbers);
    assert.deepEqual(expect, actual);
  });
});
