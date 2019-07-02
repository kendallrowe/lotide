const lotide = require("../index");
const assert = require("chai").assert;

describe("#countLetter", () => {
  it("returns returns correct count of letters stored in an object given a string with spaces", () => {
    const inputString = "lighthouse in the house";
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    assert.deepEqual(lotide.countLetter(inputString), expected)
  });

});