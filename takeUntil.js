const takeUntil = function(arrayToCheck, callback) {
  return [];
};

// Test Output
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data1, x => x === ',');
console.log(assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));