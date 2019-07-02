// Returns an array with all elements that are included in the given removeArray taken out.
const without = function(source, itemsToRemove) {
  let outputArray = [];
  let removeItem = false;

  source.forEach(function(currentElement) {
    removeItem = false;
    itemsToRemove.forEach(function(currentItem) {
      if (currentElement === currentItem) {
        removeItem = true;
      }
    });
    if (removeItem === false) {
      outputArray.push(currentElement);
    }
  });
  console.log(source);
  return outputArray;
};

module.exports = without;