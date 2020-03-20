const uniqBy = require(`./uniqBy`);

test(`expects that [1.1, 1.1, 2.3, 5.2, 4.8, 1.9] will return [1.1, 2.3, 5.2, 4.8] after flooring all values and removing duplicates`, () => {
  expect(uniqBy([1.1, 1.1, 2.3, 5.2, 4.8, 1.9], Math.floor)).toStrictEqual([1.1, 2.3, 5.2, 4.8]);
});

test(`expects that [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }] will return [{ 'x': 1 }, { 'x': 2 }] after comparing by their 'x' property and removing duplicates`, () => {
  expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], `x`)).toStrictEqual([{ x: 1 }, { x: 2 }]);
});

test(`expects that [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }] will return [{ 'x': 1 }, { 'x': 2 }] after comparing by the function (o) => o.x and removing duplicates`, () => {
  expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], (o) => o.x)).toStrictEqual([{ x: 1 }, { x: 2 }]);
});
