const padStart = require(`./padStart`);

test(`expects that padding the start of the string 'abc' up to a length of 6 will return '   abc'`, () => {
  expect(padStart(`abc`, 6)).toBe(`   abc`);
});

test(`expects that padding the start of the string 'abc' up to a length of 6 with the string '_-' will return '_-_abc'`, () => {
  expect(padStart(`abc`, 6, `_-`)).toBe(`_-_abc`);
});

test(`expects that padding the start of the string 'abc' up to a length of 3 will return 'abc'`, () => {
  expect(padStart(`abc`, 3)).toBe(`abc`);
});

test(`expects that padding the start of the string '' up to a length of 3 will return '   '`, () => {
  expect(padStart(``, 3)).toBe(`   `);
});
