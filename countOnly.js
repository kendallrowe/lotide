// Takes input of a search array and object with keys to search for within the array and returns an object with count of occurrence for each key.
const countOnly = function(allItems, itemsToCount){
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}

module.exports = countOnly;