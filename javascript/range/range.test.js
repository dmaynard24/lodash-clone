const range = require(`./range`);

test(`expects that range(4) will return [0, 1, 2, 3]`, () => {
  expect(range(4)).toStrictEqual([0, 1, 2, 3]);
});

test(`expects that range(-4) will return [0, -1, -2, -3]`, () => {
  expect(range(-4)).toStrictEqual([0, -1, -2, -3]);
});

test(`expects that range(1, 5) will return [1, 2, 3, 4]`, () => {
  expect(range(1, 5)).toStrictEqual([1, 2, 3, 4]);
});

test(`expects that range(0, 20, 5) will return [0, 5, 10, 15]`, () => {
  expect(range(0, 20, 5)).toStrictEqual([0, 5, 10, 15]);
});

test(`expects that range(0, -4, -1) will return [0, -1, -2, -3]`, () => {
  expect(range(0, -4, -1)).toStrictEqual([0, -1, -2, -3]);
});

test(`expects that range(1, 4, 0) will throw an error`, () => {
  expect(() => {
    range(1, 4, 0);
  }).toThrowError(`Invalid input. step: 0 will return 1 continuously.`);
});

test(`expects that range(0) will return []`, () => {
  expect(range(0)).toStrictEqual([]);
});
