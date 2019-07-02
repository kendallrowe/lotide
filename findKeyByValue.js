// Returns the first value of a given search object that matches a provided value.
const findKeyByValue = function(objectToSearch, value) {
  for (const key in objectToSearch) {
    if (objectToSearch[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;