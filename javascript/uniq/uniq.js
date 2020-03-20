// Array

// _.uniq(array)

// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

// Arguments
// array (Array): The array to inspect.

// Returns
// (Array): Returns the new duplicate free array.

function uniq(arr) {
  if (!arr.length) {
    return [];
  }

  return Array.from(new Set(arr));
}

module.exports = uniq;
