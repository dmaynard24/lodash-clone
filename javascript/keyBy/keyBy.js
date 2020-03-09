// _.keyBy(collection, [iteratee=_.identity])

// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).

// Since
// 4.0.0

// Arguments
// collection (Array|Object): The collection to iterate over.
// [iteratee=_.identity] (Function): The iteratee to transform keys.

// Returns
// (Object): Returns the composed aggregate object.

function keyBy(arr, iteratee) {
  return arr.reduce((a, c) => {
    a[c[iteratee]] = c;
    return a;
  }, {});
}

module.exports = keyBy;
