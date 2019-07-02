// Returns an array with all elements starting from zero of given input array included until an element is found that matches a given callback criteria. Returns entire array back if no elements match the callback criteria.
const takeUntil = function(arrayToCheck, callback) {
  arrayToCheck.forEach(function(item, index) {
    if (callback(item)) {
      arrayToCheck = arrayToCheck.slice(0, index);
      return ;
    }
  });
  return arrayToCheck;
};

module.exports = takeUntil;