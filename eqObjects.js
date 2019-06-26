// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

const findKeyByValue = function(objectToSearch, value) {
  for (const key in objectToSearch) {
    if (objectToSearch[key] === value) {
      return key;
    }
  }
  return undefined;
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  for (const key1 in object1) {
    // Check if the the current key exists in object 2, if not return false
    if (!object2[key1]) {
      return false;
      // If the key does exist, check whether BOTH values are arrays, apply eqArrays if so
    } else if (Array.isArray(object1[key1] && Array.isArray(object2[key1])) {

    } else if ()
  }
};

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false