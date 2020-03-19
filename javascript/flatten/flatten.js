// Array

// _.flatten(array)

// Flattens array a single level deep.

// Arguments
// array (Array): The array to flatten.

// Returns
// (Array): Returns the new flattened array.

function flatten(arr) {
  return arr.reduce((a, c) => {
    if (Array.isArray(c)) {
      return [...a, ...c];
    }
    return [...a, c];
  }, []);
}

module.exports = flatten;
