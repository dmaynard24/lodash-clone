// Math

// _.min(array)

// Computes the minimum value of array. If array is empty or falsey, undefined is returned.

// Arguments
// array (Array): The array to iterate over.

// Returns
// (*): Returns the minimum value.

function min(arr) {
  if (!arr.length) {
    return undefined;
  }

  return arr.reduce((a, c) => Math.min(a, c), arr[0]);
}

module.exports = min;
