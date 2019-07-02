const lotide = require("../index");
const assert = require("chai").assert;

describe("#map", () => {
  it("returns first letter of each word when handed word 0 for array of strings", () => {
    const inputArray = ["ground", "control", "to", "major", "tom"];
    const callback = word => word[0];
    const expected = ["g","c","t","m","t"];
    assert.deepEqual(lotide.map(inputArray, callback), expected);
  });

});
