const chunk = require(`./chunk`);

test(`expects that the array ['a', 'b', 'c', 'd'] to return [['a', 'b'], ['c', 'd']] when split into groups of 2`, () => {
  expect(chunk([`a`, `b`, `c`, `d`], 2)).toStrictEqual([
    [`a`, `b`],
    [`c`, `d`],
  ]);
});

test(`expects that the array ['a', 'b', 'c', 'd'] to return [['a', 'b', 'c'], ['d']] when split into groups of 3`, () => {
  expect(chunk([`a`, `b`, `c`, `d`], 3)).toStrictEqual([[`a`, `b`, `c`], [`d`]]);
});

test(`expects that the array [1, 2, 3, 4] to return [[1], [2], [3], [4]] when split into groups of 1`, () => {
  expect(chunk([1, 2, 3, 4], 1)).toStrictEqual([[1], [2], [3], [4]]);
});
