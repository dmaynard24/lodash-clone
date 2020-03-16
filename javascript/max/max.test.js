const max = require(`./max`);

test(`expects the maximum value in the array [4, 2, 8, 6] to be 8`, () => {
  expect(max([4, 2, 8, 6])).toBe(8);
});

test(`expects the maximum value in the array [-1] to be -1`, () => {
  expect(max([-1])).toBe(-1);
});

test(`expects the maximum value in the array [] to be undefined`, () => {
  expect(max([])).toBe(undefined);
});
