const keyBy = require(`./keyBy`);

const users = [
  {
    id: `a123`,
    name: `Dave`,
    age: 26,
  },
  {
    id: `ab14`,
    name: `Mark`,
    age: 28,
  },
  {
    id: `ba35`,
    name: `Sam`,
    age: 29,
  },
];

test(`expects that when the users array is keyed by id, the resulting object will be { 'a123': { id: 'a123', name: 'Dave', age: 26, }, 'ab14': { id: 'ab14', name: 'Mark', age: 28, }, 'ba35': { id: 'ba35', name: 'Sam', age: 29, } }`, () => {
  expect(keyBy(users, `id`)).toStrictEqual({
    a123: { id: `a123`, name: `Dave`, age: 26 },
    ab14: { id: `ab14`, name: `Mark`, age: 28 },
    ba35: { id: `ba35`, name: `Sam`, age: 29 },
  });
});
