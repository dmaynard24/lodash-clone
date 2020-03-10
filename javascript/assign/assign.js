// Object

// _.assign(object, [sources])

// Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

// Note: This method mutates object and is loosely based on Object.assign (https://mdn.io/Object/assign).

// Arguments
// object (Object): The destination object.
// [sources] (...Object): The source objects.

// Returns
// (Object): Returns object.

function assign(object, ...sources) {
  sources.forEach((s) => {
    object = { ...object, ...s };
  });
  return object;
}

module.exports = assign;
