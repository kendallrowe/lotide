const countLetter = function(inputString) {
  const letterCount = {};

  for (const letter of inputString) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else if (letter !== " ") {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetter;