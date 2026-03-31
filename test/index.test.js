
import { addtwo } from '../routes/addFunction.js';

test('add 2 + 3 equals 5', () => {
  expect(addtwo(2, 3)).toBe(5);
});

test('add 0 + 0 equals 0', () => {
  expect(addtwo(0, 0)).toBe(0);
});

test('add -1 + 1 equals 0', () => {
  expect(addtwo(-1, 1)).toBe(0);
});