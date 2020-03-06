const times = require(`./times`);

test(`expects the results of times(3, String) to be ['0', '1', '2']`, () => {
  expect(times(3, String)).toStrictEqual([`0`, `1`, `2`]);
});

test(`expects the results of times(3, () => 0)) to be [0, 0, 0]`, () => {
  expect(times(3, () => 0)).toStrictEqual([0, 0, 0]);
});
