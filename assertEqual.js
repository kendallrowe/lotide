<<<<<<< HEAD
// Returns to console whether two values are a strict match (type inclusive. DOES NOT account for objects, arrays).
=======
// FUNCTION IMPLEMENTATION
>>>>>>> 5959e7f1e3aabb24908ccef44bbaf1ab6f64999d
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return `😻 😻 😻 Assertion Passed: ${actual} === ` + expected;
  } else {
    return `🙈 🙈 🙈 Assertion Failed: ${actual} !== ` + expected;
  }
};

module.exports = assertEqual;