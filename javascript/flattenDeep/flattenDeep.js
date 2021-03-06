// Array

// _.flattenDeep(array)

// Recursively flattens array.

// Arguments
// array (Array): The array to flatten.

// Returns
// (Array): Returns the new flattened array.

function flattenDeep(arr) {
  return arr.reduce((a, c) => {
    if (Array.isArray(c)) {
      return [...a, ...flattenDeep(c)];
    }
    return [...a, c];
  }, []);
}

module.exports = flattenDeep;
