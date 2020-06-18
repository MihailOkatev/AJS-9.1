import { Magician } from '../Magician';

test('ошибка по дистанции', () => {
  const result = function () {
    const merlin = new Magician('Merlin');
    merlin.makeAttack(6);
  };

  expect(result).toThrow();
});

test('ошибка по дистанции', () => {
  const result = function () {
    const merlin = new Magician('Merlin');
    merlin.makeAttack(0);
  };

  expect(result).toThrow();
});

test('Атака на дистанции 2 в нормальном состоянии', () => {
  const merlin = new Magician('Merlin');
  const result = merlin.makeAttack(2);


  expect(result).toBe(90);
});

test('Атака на дистанции 2 в нормальном состоянии stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.stone = true;
  const result = merlin.makeAttack(2);


  expect(result).toBe(85);
});
