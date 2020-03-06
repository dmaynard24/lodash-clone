const assign = require(`./assign`);

const foo = { a: 1 };
const bar = { c: 3 };
test(`expects the object returned by assigning { a: 1 } and { c: 3 } to { a: 0 } to be { a: 1, c: 3 }`, () => {
  expect(assign({ a: 0 }, foo, bar)).toStrictEqual({ a: 1, c: 3 });
});

const baz = { a: `a property` };
const zab = { b: 4, c: `an other property` };
test(`expects the object returned by assigning { a: 'a property' } and { b: 4, c: 'an other property' } to { a: 'an old property' } to be { a: 'a property', b: 4, c: 'an other property' }`, () => {
  expect(assign({ a: `an old property` }, baz, zab)).toStrictEqual({ a: `a property`, b: 4, c: `an other property` });
});
