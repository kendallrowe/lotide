// Returns a single array containing all the values in order of appearance of a given nested array. (Creates as a new array).
const flatten = function(nestedArray) {
  let flattenedArray = [];

  // Loop through nested input array and check each element whether they are an array or not
  nestedArray.forEach(function(currentArray) {
    if (Array.isArray(currentArray)) {
      // If current element is an array, loop through each element of the internal array and add to our output array
      for (let i = 0; i < currentArray.length; i++) {
        flattenedArray.push(currentArray[i]);
      }
    } else {
      // If current element is NOT an array, add the element directly to output array
      flattenedArray.push(currentArray);
    }
  });
  return flattenedArray;
};

module.exports = flatten;