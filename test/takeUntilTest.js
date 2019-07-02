
const lotide = require("../index");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("returns all numbers until one is greater than 0 passing callback condition when passed array and x < 0 callback", () => {
    const inputArray = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x < 0;
    const expected = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(lotide.takeUntil(inputArray, callback), expected);
  });

  it("returns I've been to hollywood when given callback to be a comma", () => {
    const inputArray = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callback = x => x === ',';
    const expected = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    assert.deepEqual(lotide.takeUntil(inputArray, callback), expected);
  });

});