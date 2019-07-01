const tail = require("../tail");
const assert = require("chai").assert

describe("#tail", () => {
  it("returns [6, 3] for [1, 6, 3]", () => {
    assert.deepEqual(tail([1, 6, 3]), [6, 3]);
  });

});