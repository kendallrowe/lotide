const findKey = function(object, callback) {
  // Scan the object
  for (const key in object) {
    // Return the first key for which the callback returns truthy
    if (callback(object[key])) {
      return key;
    }
  }
  // If no key is found return undefined
  return undefined;
};

// Test Output
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"));