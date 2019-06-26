// Assert Equals function from Previous example
const assertArraysEqual = function(arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${arr1} === ` + arr2;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${arr1} !== ` + arr2;
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

const letterPositions = function(inputString) {
  const letterIndices = {};

  for (let i = 0; i < inputString.length; i++) {
    if (letterIndices[inputString.charAt(i)]) {
      letterIndices[inputString.charAt(i)].push(i);
    } else if (inputString.charAt(i) !== " ") {
      letterIndices[inputString.charAt(i)] = [i];
    }
  }
  return letterIndices;
};

// Test Code
const expectedAnswer = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22]
};

const testCode = function(object1, object2) {
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      console.log(assertArraysEqual(object1[key], object2[key]));
    }
  }
};

console.log(letterPositions("hello"));
console.log(testCode(letterPositions("lighthouse in the house"),expectedAnswer));