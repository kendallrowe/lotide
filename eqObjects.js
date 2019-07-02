// Returns a boolean of whether two given objects are an exact match (including nested arrays and objects).
const eqArrays = require("./eqArrays");

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
      // If only one of the values are an array, they will not be a match so return false
    } else if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return false;
      // Check if both values are objects
    } else if (typeof(object1[key]) === "object" && typeof(object2[key]) === "object") {
      // If both values are objects, check that they are of same amount of keys and if so, recursion
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
    } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
      return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;