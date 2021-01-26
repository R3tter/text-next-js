import { generateEventObj } from './index';

test('Test generateEventObj', () => {
  const event = generateEventObj('name', 'Ivan');
  expect(event).toEqual({
    target: {
      name: 'name',
      value: 'Ivan'
    }
  });
});
