const flattenDeep = require(`./flattenDeep`);

test(`expects that [1, [2, [3, [4]], 5] will return [1, 2, 3, 4, 5] when flattened deeply`, () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test(`expects that [2, [5], 4, 9, ['a', ['b'], 'c']] will return [2, 5, 4, 9, 'a', 'b', 'c'] when flattened deeply`, () => {
  expect(flattenDeep([2, [5], 4, 9, [`a`, [`b`], `c`]])).toStrictEqual([2, 5, 4, 9, `a`, `b`, `c`]);
});
