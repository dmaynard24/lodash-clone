// Util

// _.range([start=0], end, [step=1])

// Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.

// Arguments
// [start=0] (number): The start of the range.
// end (number): The end of the range.
// [step=1] (number): The value to increment or decrement by.

// Returns
// (Array): Returns the range of numbers.

function range(...args) {
  const argsLength = args.length;
  const result = [];
  const start = argsLength === 1 ? 0 : args[0];
  const end = argsLength > 1 ? args[1] : args[0];
  let step = argsLength > 2 ? args[2] : 1;

  if (step === 0) {
    /* eslint-disable-next-line */
    throw `Invalid input. step: ${step} will return ${start} continuously.`;
  }

  const diff = end - start;
  const nextDiff = end - (start + step);

  if (end < start) {
    if (diff > nextDiff) {
      // invert step to avoid infinite loop
      step *= -1;
    }
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  } else {
    // invert step to avoid infinite loop
    if (diff < nextDiff) {
      step *= -1;
    }
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  }

  return result;
}

module.exports = range;
