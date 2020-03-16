const mean = require(`./mean`);

test(`expects the mean value of the array [4, 2, 8, 6] to be 5`, () => {
  expect(mean([4, 2, 8, 6])).toBe(5);
});

test(`expects the mean value of the array [4, 8] to be 6`, () => {
  expect(mean([4, 8])).toBe(6);
});

test(`expects the mean value of the array [4, 7] to be 5.5`, () => {
  expect(mean([4, 7])).toBe(5.5);
});
