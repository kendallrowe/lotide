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

var isPlainObject = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
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

// Test Code
const ab = { a: "1", b: "2" , c: {d: "4"}};
const ba = { b: "2", c: {d: "4"}, a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: {d: "5"}};
console.log(eqObjects(ab, abc)); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false