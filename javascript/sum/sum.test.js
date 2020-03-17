const sum = require(`./sum`);

test(`expects the sum of the numbers [4, 2, 8, 6] to be 20`, () => {
  expect(sum([4, 2, 8, 6])).toBe(20);
});

test(`expects the sum of the numbers [4, 4, 1, 20] to be 29`, () => {
  expect(sum([4, 4, 1, 20])).toBe(29);
});
