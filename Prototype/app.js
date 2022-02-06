// Constructor Function
function Person(personName, age, gender) {
  // Property
  this.name = personName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.info = function () {
  return this.name + " " + this.age + " " + this.gender;
};

for (let i = 0; i < 100; i++) {
  const name = `User${i + 1}`;
  const age = i + 20;
  const gender = i % 2 === 0 ? "Male" : "Female";
  const newUser = new Person(name, age, gender);

  console.log(newUser);
}
