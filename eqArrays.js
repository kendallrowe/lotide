// Assert Equals function from Previous example
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)) // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false)) // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true)) // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)) // => false