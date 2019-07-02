const eqArrays = require("./eqArrays")

// Assert Equals function from Previous example
const assertArraysEquals = function(arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match === true) {
    return `😻 😻 😻 Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🙈 🙈 🙈 Assertion Failed: ${arr1} !== ${arr2}`;
  }
};

module.exports = assertArraysEquals;