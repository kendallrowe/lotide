# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kendall.rowe/lotide`

**Require it:**

`const _ = require('@kendall.rowe/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `assertArraysEquals(arr1, arr2)` : Returns to console whether two arrays are an exact match (including nested arrays).
  * `assertEqual(value1, value2)` : Returns to console whether two values are a strict match (type inclusive. DOES NOT account for objects, arrays).
  * `assertObjectsEqual(obj1, obj2)` : Returns to console whether two objects are a strict match (including nested arrays and objects.).
  * `countLetter(inputString)` : Returns an object with count of all letters and how many times each occurs in a given input string.
  * `countOnly(inputArray, searchObject)` : Takes input of a search array and object with keys to search for within the array and returns an object with count of occurrence for each key.
  * `eqArrays(arr1, arr2)` : Returns a boolean of whether two given arrays are an exact match (including nested arrays).
  * `eqObjects(obj1, obj2` : Returns a boolean of whether two given objects are an exact match (including nested arrays and objects).
  * `findKey(searchObject, callback)` : Returns the first key of a given search object that matches a provided callback criteria.
  * `findKeyByValue(searchObject, value` : Returns the first value of a given search object that matches a provided value.
  * `flatten(inputNestedArray)` : Returns a single array containing all the values in order of appearance of a given nested array. (Creates as a new array).
  * `head(inputArray)` : Returns the first element of a given input array.
  * `letterPositions(inputString)` : Returns an object with all letters and an array as value of the indices for given letter where they appear within the input string.
  * `map(inputArray, callback)` : Returns an array after applying a given callback function to each element. (Creates as new array with all passing criteria applied).
  * `middle(inputArray)` : Returns an array of the middle element if given an odd length array. Returns the middle two elements as an array for even length. Returns undefined for empty array.
  * `tail(inputArray)` : Returns an array with the first element of given input array removed.
  * `takeUntil(inputArray, callback)` : Returns an array with all elements starting from zero of given input array included until an element is found that matches a given callback criteria. Returns entire array back if no elements match the callback criteria.
  * `without(inputArray, removeArray)` : Returns an array with all elements that are included in the given removeArray taken out.