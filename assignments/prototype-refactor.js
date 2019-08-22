/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }
  destroy() {
    console.log(`${this.name} was removed from the game.`);
  }
}

class CharacterStats {
  constructor(obj) {
    this.healthPoints = obj.healthPoints;
  }

  takeDamage(damage) {
    this.healthPoints -= damage;

    console.log(`${this.name} took ${damage} damage!`);
    if (this.healthPoints < 0) {
      console.log(`${this.name}'s health has dropped below zero!`);
    } else {
      console.log(`${this.name} has ${this.healthPoints} health remaining.`);
    }
    if (this.healthPoints <= 0) {
      this.destroy();
    }
  }
}
