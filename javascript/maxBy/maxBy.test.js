const maxBy = require(`./maxBy`);

const objects = [{ n: 1 }, { n: 2 }, { n: 0 }];

test(`expects that the largest of the objects[{ n: 1 }, { n: 2 }, { n: 0 }] when compared by their 'n' property to be { n: 2 }`, () => {
  expect(maxBy(objects, `n`)).toStrictEqual({ n: 2 });
});

test(`expects that the largest of the objects[{ n: 1 }, { n: 2 }, { n: 0 }] when compared by the function (o) => o.n to be { n: 2 }`, () => {
  expect(maxBy(objects, (o) => o.n)).toStrictEqual({ n: 2 });
});
