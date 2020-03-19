const flatten = require(`./flatten`);

test(`expects that [1, [2, [3, [4]], 5]] will return [1, 2, [3, [4]], 5] when flattened a single level deep`, () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, [3, [4]], 5]);
});

test(`expects that [2, [5], 4, 9, ['a', 'b', 'c']] will return [2, 5, 4, 9, 'a', 'b', 'c'] when flattened a single level deep`, () => {
  expect(flatten([2, [5], 4, 9, [`a`, `b`, `c`]])).toStrictEqual([2, 5, 4, 9, `a`, `b`, `c`]);
});
