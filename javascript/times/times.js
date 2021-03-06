// Util

// _.times(n, [iteratee=_.identity])

// Invokes the iteratee n times, returning an array of the results of each invocation. The iteratee is invoked with one argument; (index).

// Arguments
// n (number): The number of times to invoke iteratee.
// [iteratee=_.identity] (Function): The function invoked per iteration.

// Returns
// (Array): Returns the array of results.

function times(n, iteratee) {
  if (n < 1) {
    return [];
  }

  const results = Array(n);
  for (let i = 0; i < n; i++) {
    results[i] = iteratee(i);
  }
  return results;
}

module.exports = times;
