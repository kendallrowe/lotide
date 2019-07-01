// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻 😻 😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈 🙈 🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

module.exports = assertEqual;