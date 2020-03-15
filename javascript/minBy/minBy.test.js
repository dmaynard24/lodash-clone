const minBy = require(`./minBy`);

const objects = [{ n: 1 }, { n: 2 }, { n: 0 }];

test(`expects that the smallest object in the array [{ n: 1 }, { n: 2 }, { n: 0 }] when compared by their 'n' property will be { n: 0 }`, () => {
  expect(minBy(objects, `n`)).toStrictEqual({ n: 0 });
});

test(`expects that the smallest object in the array [{ n: 1 }, { n: 2 }, { n: 0 }] when compared by the function (o) => o.n will be { n: 0 }`, () => {
  expect(minBy(objects, (o) => o.n)).toStrictEqual({ n: 0 });
});
