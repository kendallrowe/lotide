const lotide = require("../index");
const assert = require("chai").assert;

describe("#assertEqual", () => {
  it("returns assertion failed for different strings", () => {
    const item1 = "Lighthouse Labs";
    const item2 = "Bootcamps";
    assert.strictEqual(lotide.assertEqual(item1, item2), `🙈 🙈 🙈 Assertion Failed: ${item1} !== ${item2}`);
  });

  it("returns assertion passed for same values", () => {
    const item1 = 1;
    const item2 = 1;
    assert.strictEqual(lotide.assertEqual(item1, item2), `😻 😻 😻 Assertion Passed: ${item1} === ${item2}`);
  });

  it("returns assertion failed for different data types", () => {
    const item1 = 1;
    const item2 = "1";
    assert.strictEqual(lotide.assertEqual(item1, item2), `🙈 🙈 🙈 Assertion Failed: ${item1} !== ${item2}`);
  });

  it("returns assertion failed for array with different values", () => {
    const item1 = 1;
    const item2 = 10;
    assert.strictEqual(lotide.assertEqual(item1, item2), `🙈 🙈 🙈 Assertion Failed: ${item1} !== ${item2}`);
  });
});