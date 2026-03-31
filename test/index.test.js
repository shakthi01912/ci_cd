const { add } = require('../index');

test('add 2 + 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('add 0 + 0 equals 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('add -1 + 1 equals 0', () => {
  expect(add(-1, 1)).toBe(0);
});