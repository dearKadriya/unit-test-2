import sortByHealth from './src/sortingByHealth';

test('Проверка нарушенного порядка', () => {
  const result = sortByHealth([{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }]);
  expect(result).toEqual([{ name: 'маг', health: 100 }, { name: 'мечник', health: 10 }]);
});
test('Проверка правильного порядка', () => {
  const result = sortByHealth([{ name: 'маг', health: 100 }, { name: 'мечник', health: 10 }]);
  expect(result).toEqual([{ name: 'маг', health: 100 }, { name: 'мечник', health: 10 }]);
});
test('Проверка undefined', () => {
  const result = sortByHealth(undefined);
  expect(result).toEqual('Невалидное значение');
});
