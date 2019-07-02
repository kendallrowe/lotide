const eqArrays = require("./eqArrays");

// Returns to console whether two arrays are an exact match (including nested arrays)
const assertArraysEquals = function(arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match === true) {
    return `😻 😻 😻 Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🙈 🙈 🙈 Assertion Failed: ${arr1} !== ${arr2}`;
  }
};

module.exports = assertArraysEquals;