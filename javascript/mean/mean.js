// Math

// _.mean(array)

// Computes the mean of the values in array.

// Arguments
// array (Array): The array to iterate over.

// Returns
// (number): Returns the mean.

function mean(arr) {
  if (!arr.length) {
    return 0;
  }

  return arr.reduce((a, c) => a + c) / arr.length;
}

module.exports = mean;
