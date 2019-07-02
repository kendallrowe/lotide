const lotide = require("../index");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("returns returns correct flattened array when passed a nested array", () => {
    const inputArray = [1, 2, [3, 4], 5, [6]];
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(lotide.flatten(inputArray), expected)
  });

});
