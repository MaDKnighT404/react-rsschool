import { user } from './example';

test('George is 25', () => {
  expect(user.name).toBe('George');
  expect(user.age).toBe(25);
});
