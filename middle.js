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

const middle = function(inputArray) {
  let returnArray = [];

  // For arrays of length 1 or two, return empty array
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 1) {
      // If array has odd length, return 1 single element
      returnArray.push(inputArray[(Math.floor(inputArray.length / 2))]);
    } else {
      // If array has even length, return the two middle elements
      returnArray.push(inputArray[(Math.floor(inputArray.length / 2)) - 1]);
      returnArray.push(inputArray[(Math.floor(inputArray.length / 2))]);
    }
  }
  return returnArray;
};

// TEST CODE
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));