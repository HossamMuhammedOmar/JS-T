// Constructor Function
function Fighter(name, skill) {
  this.name = name;
  this.skill = skill;
}
// Prototype
Fighter.prototype.info = function () {
  return this;
};

// Constructor Function
function Enemy(name, skill, size, color) {
  Fighter.call(this, name, skill);
  this.size = size;
  this.color = color;
}

// Prototypal Inheritance
Enemy.prototype = Object.create(Fighter.prototype);

const enemy = new Enemy("Godzilla", "Electric power", "Very Big", "Green");

console.log(enemy.info());

const fighter = new Fighter("Ebn Hanble", "Science");
console.log(fighter.info());
// const godzilla = new Enemy(
//   "Godzilla",
//   "Electric power",
//   "Very Big",
//   "Green",
//   "Shot the electric ball"
// );

// const KingKong = new Enemy(
//   "KingKong",
//   "Body Power",
//   "very very big",
//   "Gray",
//   "Bunch very strong"
// );
