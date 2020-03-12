// String

// _.padStart([string=''], [length=0], [chars=' '])

// Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.

// Arguments
// [string=''] (string): The string to pad.
// [length=0] (number): The padding length.
// [chars=' '] (string): The string used as padding.

// Returns
// (string): Returns the padded string.

function padStart(str, len, chars) {
  const strLength = str.length;
  if (len <= strLength) {
    return str;
  }

  if (!chars) {
    chars = ` `;
  }

  return (
    Array(Math.ceil(len / chars.length))
      .fill(chars)
      .join(``)
      .substring(0, len - strLength) + str
  );
}

module.exports = padStart;
