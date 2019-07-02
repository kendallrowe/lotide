const lotide = require("../index");
const assert = require("chai").assert;

describe("#without", () => {
  it("returns array with any matching elements removed when given array of one", () => {
    const inputArray = [1, 2, 3];
    const compareArray = [1];
    const expected = [2, 3];
    assert.deepEqual(lotide.without(inputArray, compareArray), expected);
  });

});