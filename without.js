// Assert Equals function from Previous example
const assertArraysEqual = function(arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match === true) {
    return `😻😻😻 Assertion Passed: ${arr1} === ` + arr2;
  } else {
    return `🙈🙈🙈 Assertion Failed: ${arr1} !== ` + arr2;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

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

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);