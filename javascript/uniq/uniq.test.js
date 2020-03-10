const uniq = require(`./uniq`);

test(`expects that [1, 1, 2, 5, 4, 1] will return [1, 2, 5, 4] when all duplicate values are removed`, () => {
  expect(uniq([1, 1, 2, 5, 4, 1])).toStrictEqual([1, 2, 5, 4]);
});

test(`expects that ['a', 'e', 'i', 'o', 'o', 'u'] will return ['a', 'e', 'i', 'o', 'u'] when all duplicate values are removed`, () => {
  expect(uniq([`a`, `e`, `i`, `o`, `o`, `u`])).toStrictEqual([`a`, `e`, `i`, `o`, `u`]);
});
