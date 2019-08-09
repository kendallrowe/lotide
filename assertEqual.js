// Returns to console whether two values are a strict match (type inclusive. DOES NOT account for objects, arrays).
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻 😻 😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈 🙈 🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

module.exports = assertEqual;