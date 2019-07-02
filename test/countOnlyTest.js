const lotide = require("../index");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it("returns returns 1 if name appears once in object", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const searchObject = { "Jason": true, "Karima": true, "Fang": true };
    const expected = 1;
    const result = lotide.countOnly(firstNames, searchObject);
    assert.strictEqual(result["Jason"], expected);
  });

  it("returns returns undefined if name never appears in object", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const searchObject = { "Jason": true, "Karima": true, "Fang": true };
    const expected = undefined;
    const result = lotide.countOnly(firstNames, searchObject);
    assert.strictEqual(result["Karima"], expected);
  });


  it("returns returns 2 if name appears twice in object", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const searchObject = { "Jason": true, "Karima": true, "Fang": true };
    const expected = 2;
    const result = lotide.countOnly(firstNames, searchObject);
    assert.strictEqual(result["Fang"], expected);
  });

});
