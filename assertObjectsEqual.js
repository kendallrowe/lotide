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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Before looping, check that both objects are the same length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    // Check if the the current key exists in object 2, if not return false
    if (!object2[key]) {
      return false;
      // If the key does exist, check whether BOTH values are arrays, apply eqArrays if so
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
      // If only one of the values are an array, they will not be a match so return falst
    } else if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// Assert Objects Equals function to return text if objects are a match
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const match = eqObjects(actual, expected);
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false