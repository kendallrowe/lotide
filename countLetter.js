<<<<<<< HEAD
// Returns an object with count of all letters and how many times each occurs in a given input string.
=======
>>>>>>> 5959e7f1e3aabb24908ccef44bbaf1ab6f64999d
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