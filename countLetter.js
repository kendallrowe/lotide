const countLetters = function(inputString) {
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

console.log(countLetters('lighthouse in the house'));