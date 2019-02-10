import sorting from '../src/function';

test('Входной массив из 0 элементов ', () => {
  const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = [];

  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const received = sorting(order, hero);
  expect(received).toEqual(received);
});

test('Входной массив из 1 элемента ', () => {
  const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = ['health'];

  const expected = [
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const received = sorting(order, hero);
  expect(received).toEqual(received);
});

test('Входной массив из 3 элементов ', () => {
  const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = ['health', 'name', 'level'];

  const expected = [
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];
  const received = sorting(order, hero);
  expect(received).toEqual(received);
});

test('Входной массив из 5 элементов ', () => {
  const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = ['health', 'name', 'level', 'defence', 'attack'];

  const expected = [
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];
  const received = sorting(order, hero);
  expect(received).toEqual(received);
});
