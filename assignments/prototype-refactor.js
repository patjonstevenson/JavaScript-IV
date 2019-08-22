/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// *************
// ** CLASSES **
// *************

// GAMEOBJECT
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

// CHARACTERSTATS
class CharacterStats extends GameObject {
  constructor(obj) {
    super(obj);
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

// HUMANOID
class Humanoid extends CharacterStats {
  constructor(obj) {
    super(obj);
    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// HERO
class Hero extends Humanoid {
  constructor(obj) {
    super(obj);
  }

  attack(target, damage) {
    console.log(
      `Heroic ${this.name} uses ${this.weapons} to attack ${
        target.name
      }! What a fine day!`
    );
    target.takeDamage(damage);
    if (target.healthPoints <= 0) {
      console.log(`${this.name} has defeated ${target.name}! Tremendous!!`);
    }
  }
}

// VILLAIN
class Villain extends Humanoid {
  constructor(obj) {
    super(obj);
  }
  attack(target, damage) {
    console.log(
      `Villainous ${this.name} uses ${this.weapons} to attack ${
        target.name
      }! How horrible!`
    );
    target.takeDamage(damage);
    if (target.healthPoints <= 0) {
      console.log(`${this.name} has defeated ${target.name}! What a tragedy!!`);
    }
  }
}

// *****************
// ** MVP TESTING **
// *****************

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log("\n\n\nprototypes.js\n\n");

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
mage.takeDamage(1); // Bruce took damage.
swordsman.destroy(); // Sir Mustachio was removed from the game.

// *********************
// ** STRETCH TESTING **
// *********************

// Create hero
const thor = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 4
  },
  healthPoints: 100,
  name: "Thor",
  team: "Asgard",
  weapons: ["Mjolnir"],
  language: "Proto-Indo-European"
});

// Create villain
const loki = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 4
  },
  healthPoints: 90,
  name: "Loki",
  team: "Mage Guild",
  weapons: ["Scepter"],
  language: "Proto-Indo-European"
});

console.log("\n\n");

// THOR VS LOKI BATTLE BEGINS
console.log(`${thor.name} and ${loki.name} begin to do battle!`);
console.log(`${loki.name} starting health: ${loki.healthPoints}.`);
console.log(`${thor.name} starting health: ${thor.healthPoints}.`);
console.log("\n");

thor.attack(loki, 50);
console.log("\n");

loki.attack(thor, 30);
console.log("\n");

thor.attack(loki, 50);
