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

const flatten = function(nestedArray) {
  let flattenedArray = [];

  // Loop through nested input array and check each element whether they are an array or not
  nestedArray.forEach(function(currentArray) {
    if (Array.isArray(currentArray)) {
      // If current element is an array, loop through each element of the internal array and add to our output array
      for (let i = 0; i < currentArray.length; i++) {
        flattenedArray.push(currentArray[i]);
      }
    } else {
      // If current element is NOT an array, add the element directly to output array
      flattenedArray.push(currentArray);
    }
  });
  return flattenedArray;
}

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]));