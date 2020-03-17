// Math

// _.sum(array)

// Computes the sum of the values in array.

// Arguments
// array (Array): The array to iterate over.

// Returns
// (number): Returns the sum.

function sum(arr) {
  if (!arr.length) {
    return 0;
  }

  return arr.reduce((a, c) => a + c);
}

module.exports = sum;
