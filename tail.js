// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1);
};

// Function to iterate through array and test values to check that tail returned is correct
const tailTest = function(array) {
  const tailArray = tail(array);
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      console.log(assertEqual(tailArray[0], array[0]));
    } else {
      console.log(assertEqual(tailArray[i - 1],array[i]));
    }
  }
  return `New tail array is ${tailArray} and is ${tailArray.length} long.`;
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
console.log(tailTest([1, 6, 3]));
