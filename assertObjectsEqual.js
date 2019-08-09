const eqObjects = require("./eqObjects");

// Returns to console whether two objects are a strict match (including nested arrays and objects.).
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const match = eqObjects(actual, expected);
  if (match === true) {
    return `😻 😻 😻 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🙈 🙈 🙈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

module.exports = assertObjectsEqual;