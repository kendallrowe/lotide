const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)) // => true

console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)) // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)); // => false