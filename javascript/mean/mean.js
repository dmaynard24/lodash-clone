// Math

// _.mean(array)

// Computes the mean of the values in array.

// Since
// 4.0.0

// Arguments
// array (Array): The array to iterate over.

// Returns
// (number): Returns the mean.

function mean(arr) {
  return arr.reduce((a, c) => a + c) / arr.length;
}

module.exports = mean;
