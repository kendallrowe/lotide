// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const match = actual === expected;
  if (match === true) {
    return "😻😻😻 Assertion Passed: " + actual + " === " + expected;
  } else {
    return "🙈🙈🙈 Assertion Failed: " + actual + " !== " + expected;
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, "Bootcamp"));
console.log(assertEqual("Bootcamp", "Bootcamp"));

