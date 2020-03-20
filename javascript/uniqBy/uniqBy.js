// Array

// _.uniqBy(array, [iteratee=_.identity])

// This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
// (value).

// Arguments
// array (Array): The array to inspect.
// [iteratee=_.identity] (Function): The iteratee invoked per element.

// Returns
// (Array): Returns the new duplicate free array.

function uniqBy(arr, iteratee) {
  if (!arr.length) {
    return [];
  }

  if (arr.length === 1) {
    return arr;
  }

  if (typeof iteratee === `string`) {
    const str = iteratee;
    iteratee = (o) => o[str];
  }

  const result = [arr[0]];
  const cachedVals = new Set();
  cachedVals.add(iteratee(arr[0]));
  for (let i = 1; i < arr.length; i++) {
    const value = iteratee(arr[i]);
    if (!cachedVals.has(value)) {
      cachedVals.add(value);
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = uniqBy;
