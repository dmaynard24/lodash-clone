// Array

// _.sortedUniq(array)

// This method is like _.uniq except that it's designed and optimized for sorted arrays.

// Since
// 4.0.0

// Arguments
// array (Array): The array to inspect.

// Returns
// (Array): Returns the new duplicate free array.

function sortedUniq(arr) {
  const result = [];
  const { length } = arr;

  let i = 0;
  while (i < length) {
    result.push(arr[i]);
    if (i + 1 > length - 1) {
      break;
    }

    let j = i + 1;
    while (arr[i] === arr[j]) {
      j++;
    }

    i = j;
  }

  return result;
}

module.exports = sortedUniq;
