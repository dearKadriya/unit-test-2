const testData = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
export default function sortByHealth(data) {
  if (!data) return 'Невалидное значение';
  return data.sort((x, y) => y.health - x.health);
}

sortByHealth(testData);
