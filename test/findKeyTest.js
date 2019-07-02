const lotide = require("../index");
const assert = require("chai").assert;

describe("#findKey", () => {
  it("returns returns 'noma' when given value of 2 as callback", () => {
    const searchObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const searchTermCallback = x => x.stars === 2;
    const expected = "noma";
    assert.strictEqual(lotide.findKey(searchObject, searchTermCallback), expected);
  });

  it("returns returns undefined when given non-existent value return for callback", () => {
    const searchObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const searchTermCallback = x => x.stars === 5;
    const expected = undefined;
    assert.strictEqual(lotide.findKey(searchObject, searchTermCallback), expected);
  });

});
