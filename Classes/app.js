// Classes

// Instead of create a Constructor function like this below
function Company(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Company.prototype.info = function () {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender} `;
};

// Instead of that, we create a class
class Persons {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  info() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender} `;
  }
}

const person = new Persons("Hossam", 23, "Male");
console.log(person);
// and Inherits can be easy with classes
// Let's create a new class call employee that inherit from the Person class, and have an extra property wish called salary
class Employee extends Persons {
  constructor(name, age, gender, salary) {
    super(name, age, gender);
    this.salary = salary;
  }
}

const employee = new Employee("Ahmed", 25, "Male", 2500);

console.log(employee);
