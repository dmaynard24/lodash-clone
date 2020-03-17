// Math

// _.sumBy(array, [iteratee=_.identity])

// This method is like _.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. The iteratee is invoked with one argument: (value).

// Arguments
// array (Array): The array to iterate over.
// [iteratee=_.identity] (Function): The iteratee invoked per element.

// Returns
// (number): Returns the sum.

function sumBy(arr, iteratee) {
  if (!arr.length) {
    return 0;
  }

  if (typeof iteratee === `string`) {
    const str = iteratee;
    iteratee = (o) => o[str];
  }

  return arr.reduce((a, c) => a + iteratee(c), 0);
}

module.exports = sumBy;
