// Math

// _.minBy(array, [iteratee=_.identity])

// This method is like _.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

// Arguments
// array (Array): The array to iterate over.
// [iteratee=_.identity] (Function): The iteratee invoked per element.

// Returns
// (*): Returns the minimum value.

function minBy(arr, iteratee) {
  if (!arr.length) {
    return arr;
  }

  if (typeof iteratee === `string`) {
    const str = iteratee;
    iteratee = (o) => o[str];
  }

  let minObj = arr[0];
  let minVal = iteratee(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currValue = iteratee(arr[i]);

    if (currValue < minVal) {
      minObj = arr[i];
      minVal = currValue;
    }
  }

  return minObj;
}

module.exports = minBy;
