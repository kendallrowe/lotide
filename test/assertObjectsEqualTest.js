const lotide = require("../index");
const assert = require("chai").assert;
const inspect = require('util').inspect;
// Used to test eqObjects as well
describe("#assertObjectsEqual", () => {
  it("returns assertion failed for different object sizes", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { a: "1", b: "2", c: "3" };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `🙈 🙈 🙈 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  });

  it("returns assertion passed for objects with same keys and values (irrespective of order)", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: "1" };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `😻 😻 😻 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  });

  it("returns assertion failed for different data types within object", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: 1 };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `🙈 🙈 🙈 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  });

  it("returns assertion passed for objects with same keys and with array values (irrespective of order)", () => {
    const obj1 = { a: ["1"], b: "2" };
    const obj2 = { b: "2", a: ["1"] };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `😻 😻 😻 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  });

  it("returns assertion failed for when containing an array and other not", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: ["1"] };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `🙈 🙈 🙈 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  });

  it("returns assertion failed for array with different values", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: ["2"] };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `🙈 🙈 🙈 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  });

  it("returns assertion passed for objects with same keys and with object values (irrespective of order)", () => {
    const obj1 = { a: {a: ["1"]}, b: "2" };
    const obj2 = { b: "2", a: {a: ["1"]} };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `😻 😻 😻 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  });

  it("returns assertion failed for object with different values", () => {
    const obj1 = { a: "1", b: {c: "2"} };
    const obj2 = { b: {c: "1"}, a: ["2"] };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `🙈 🙈 🙈 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  });

  it("returns assertion failed for object vs no object contained", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: {a: "2"} };
    assert.strictEqual(lotide.assertObjectsEqual(obj1, obj2), `🙈 🙈 🙈 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  });
});
