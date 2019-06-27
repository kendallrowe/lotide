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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1,["g","c","t","m","t"]));