const meanBy = require(`./meanBy`);

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

test(`expects the mean value of the objects [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }] when summed by their 'n' property to be 5`, () => {
  expect(meanBy(objects, `n`)).toBe(5);
});
test(`expects the mean value of the objects [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }] when summed by the function (o) => o.n to be 5`, () => {
  expect(meanBy(objects, (o) => o.n)).toBe(5);
});
