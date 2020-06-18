// eslint-disable-next-line import/prefer-default-export
export class Character {
  constructor(name) {
    this.name = name;
    this.type = undefined;
    this.level = 1;
    this.health = 100;
    this.defence = 1;
    this.attack = 1;
    this.stoned = false;
  }

  set stone(value) {
    this.stoned = value;
  }

  get stone() {
    return this.stoned;
  }

  makeAttack(distance) {
    if (distance > 4 || distance < 1) {
      throw new Error('Неверная координата атаки');
    }
    let damage = this.attack - (this.attack * (0.1 * (distance - 1)));
    if (this.stone) {
      damage -= Math.log2(distance) * 5;
    }
    return damage;
  }
}
