// Math

// _.max(array)

// Computes the maximum value of array. If array is empty or falsey, undefined is returned.

// Arguments
// array (Array): The array to iterate over.

// Returns
// (*): Returns the maximum value.

function max(arr) {
  if (!arr.length) {
    return undefined;
  }

  return arr.reduce((a, c) => Math.max(a, c), arr[0]);
}

module.exports = max;
