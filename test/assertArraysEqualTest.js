const lotide = require("../index");
const assert = require("chai").assert;
// Used to test eqArrays as well
describe("#assertArraysEqual", () => {
  it("returns assertion passed for exact same arrays with number values", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.strictEqual(lotide.assertArraysEquals(arr1, arr2), `😻 😻 😻 Assertion Passed: ${arr1} === ${arr2}`)
  });

  it("returns assertion failed for array with different order of values", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    assert.strictEqual(lotide.assertArraysEquals(arr1, arr2), `🙈 🙈 🙈 Assertion Failed: ${arr1} !== ${arr2}`)
  });

  it("returns assertion passed for exact same arrays with strings", () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", "3"];
    assert.strictEqual(lotide.assertArraysEquals(arr1, arr2), `😻 😻 😻 Assertion Passed: ${arr1} === ${arr2}`)
  });

  it("returns assertion failed for array with different data types", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, "1"];
    assert.strictEqual(lotide.assertArraysEquals(arr1, arr2), `🙈 🙈 🙈 Assertion Failed: ${arr1} !== ${arr2}`)
  });

  it("returns assertion passed for when matching with nested arrays", () => {
    const arr1 = ["1", "2", ["3"]];
    const arr2 = ["1", "2", ["3"]];
    assert.strictEqual(lotide.assertArraysEquals(arr1, arr2), `😻 😻 😻 Assertion Passed: ${arr1} === ${arr2}`)
  });

  it("returns assertion failed for different arrays", () => {
    const arr1 = ["1", "2", ["3"]];
    const arr2 = ["1", "2", ["2"]];
    assert.strictEqual(lotide.assertArraysEquals(arr1, arr2), `🙈 🙈 🙈 Assertion Failed: ${arr1} !== ${arr2}`)
  });

});