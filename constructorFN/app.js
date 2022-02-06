// Constructor Function
function Person(personName, age, gender) {
  // Property
  this.name = personName;
  this.age = age;
  this.gender = gender;

  // Methods
  this.info = function () {
    console.log(this.name, this.age, this.gender);
  };
}

const user = new Person("Hossam", 23, "Male");
const admin = new Person("Ahmed", 39, "Male");

user.info();
admin.info();
