import { sorting } from './function';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const order = ['health', 'name'];

console.log(sorting(order, hero));
