const lotide = require("../index");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  it("returns returns drama when given the wire as search term", () => {
    const searchObject = bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const searchTerm = "The Wire";
    const expected = "drama";
    assert.strictEqual(lotide.findKeyByValue(searchObject, searchTerm), expected)
  });

  it("returns returns undefined when given non-existent value as search term", () => {
    const searchObject = bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const searchTerm = "That '70s Show";
    const expected = undefined;
    assert.strictEqual(lotide.findKeyByValue(searchObject, searchTerm), expected)
  });

});