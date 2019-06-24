// FUNCTION IMPLEMENTATION
const head = function(array) {
  return array[0];
};

const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), undefined));
