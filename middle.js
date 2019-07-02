// Returns an array of the middle element if given an odd length array. Returns the middle two elements as an array for even length. Returns undefined for empty array.
const middle = function(inputArray) {
  let returnArray = [];

  // For arrays of length 1 or two, return empty array
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 1) {
      // If array has odd length, return 1 single element
      returnArray.push(inputArray[(Math.floor(inputArray.length / 2))]);
    } else {
      // If array has even length, return the two middle elements
      returnArray.push(inputArray[(Math.floor(inputArray.length / 2)) - 1]);
      returnArray.push(inputArray[(Math.floor(inputArray.length / 2))]);
    }
  }
  return returnArray;
};

module.exports = middle;