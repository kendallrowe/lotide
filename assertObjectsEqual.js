const eqObjects = require("./eqObjects");

// Assert Objects Equals function to return text if objects are a match
// FUNCTION IMPLEMENTATION
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