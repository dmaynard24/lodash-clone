// _.chunk(array, [size=1])

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

// Arguments
// array (Array): The array to process.
// [size=1] (number): The length of each chunk

// Returns
// (Array): Returns the new array of chunks.

function chunk(arr, size) {
  const { length } = arr;
  const result = [];

  if (!length || size < 1) {
    return [];
  }

  if (size >= length) {
    return [arr];
  }

  for (let i = 0; i < length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

module.exports = chunk;
