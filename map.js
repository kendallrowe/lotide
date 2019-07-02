// Returns an array after applying a given callback function to each element. (Creates as new array with all passing criteria applied).
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;