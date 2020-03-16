// Math

// _.maxBy(array, [iteratee=_.identity])

// This method is like _.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

// Arguments
// array (Array): The array to iterate over.
// [iteratee=_.identity] (Function): The iteratee invoked per element.

// Returns
// (*): Returns the maximum value.

function maxBy(arr, iteratee) {
  const { length } = arr;

  if (!length) {
    return arr;
  }

  if (typeof iteratee === `string`) {
    const str = iteratee;
    iteratee = (o) => o[str];
  }

  if (length === 1) {
    return iteratee(arr[0]);
  }

  let maxObj = arr[0];
  let maxVal = iteratee(arr[0]);

  for (let i = 1; i < length; i++) {
    const currValue = iteratee(arr[i]);

    if (currValue > maxVal) {
      maxObj = arr[i];
      maxVal = currValue;
    }
  }

  return maxObj;
}

module.exports = maxBy;
