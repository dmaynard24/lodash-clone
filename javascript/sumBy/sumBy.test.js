const sumBy = require(`./sumBy`);

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

test(`expects the sum of the objects [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }] when summed by their 'n' property to be 20`, () => {
  expect(sumBy(objects, `n`)).toBe(20);
});

test(`expects the sum of the objects [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }] when summed by the function (o) => o.n to be 20`, () => {
  expect(sumBy(objects, (o) => o.n)).toBe(20);
});
