/* eslint-env jest */
import mega from '../index';

test('has correct properties', () => {
  expect(mega).toHaveProperty('icons');
  expect(mega).toHaveProperty('toSvg');
  expect(mega).toHaveProperty('replace');
});
