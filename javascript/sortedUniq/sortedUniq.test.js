const sortedUniq = require(`./sortedUniq`);

test(`expects that when the sorted array [1, 1, 2, 3, 3, 3, 5, 8, 8] is stripped of all non-unique elements that it will return [1, 2, 3, 5, 8]`, () => {
  expect(sortedUniq([1, 1, 2, 3, 3, 3, 5, 8, 8])).toStrictEqual([1, 2, 3, 5, 8]);
});

test(`expects that when the sorted array [1, 1, 2, 3, 3, 3, 5, 8] is stripped of all non-unique elements that it will return [1, 2, 3, 5, 8]`, () => {
  expect(sortedUniq([1, 1, 2, 3, 3, 3, 5, 8])).toStrictEqual([1, 2, 3, 5, 8]);
});
