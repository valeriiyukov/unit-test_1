import getHealthStatus from '../src/app';

test('should return proper string', () => {
  const input = [
    { name: 'Маг', health: 90 },
    { name: 'Лучник', health: 15 },
    { name: 'Воин', health: 10 },
  ];

  const expected = 'healthy';
  const received = getHealthStatus(input);
  expect(received).toBe(expected);
});
