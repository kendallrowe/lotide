// Returns the first key of a given search object that matches a provided callback criteria
const findKey = function(object, callback) {
  // Scan the object
  
  for (const key in object) {
    // Return the first key for which the callback returns truthy
    if (callback(object[key])) {
      return key;
    }
  }
  // If no key is found return undefined
  return undefined;
};

module.exports = findKey;