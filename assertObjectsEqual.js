const eqObjects = require("./eqObjects");

<<<<<<< HEAD
// Returns to console whether two objects are a strict match (including nested arrays and objects.).
=======
// Assert Objects Equals function to return text if objects are a match
// FUNCTION IMPLEMENTATION
>>>>>>> 5959e7f1e3aabb24908ccef44bbaf1ab6f64999d
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