const min = require(`./min`);

test(`expects the minimum value in the array [4, 2, 8, 6] to be 2`, () => {
  expect(min([4, 2, 8, 6])).toBe(2);
});

test(`expects the minimum value in the array [] to be undefined`, () => {
  expect(min([])).toBe(undefined);
});
