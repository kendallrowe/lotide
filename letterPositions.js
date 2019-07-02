// Returns an object with all letters and an array as value of the indices for given letter where they appear within the input string.
const letterPositions = function(inputString) {
  const letterIndices = {};

  for (let i = 0; i < inputString.length; i++) {
    if (letterIndices[inputString.charAt(i)]) {
      letterIndices[inputString.charAt(i)].push(i);
    } else if (inputString.charAt(i) !== " ") {
      letterIndices[inputString.charAt(i)] = [i];
    }
  }
  return letterIndices;
};

module.exports = letterPositions;