const tail = require("../tail");
const assertEqual = require("../assertEqual");

// Function to iterate through array and test values to check that tail returned is correct
const tailTest = function(array) {
  const tailArray = tail(array);
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      console.log(assertEqual(tailArray[0], array[0]));
    } else {
      console.log(assertEqual(tailArray[i - 1],array[i]));
    }
  }
  return `New tail array is ${tailArray} and is ${tailArray.length} long.`;
};

// TEST CODE
console.log(tailTest([1, 6, 3]));
