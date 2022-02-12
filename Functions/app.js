// hello();

// FUNCTION DECLARATION
function hello() {
  console.log("Hello!");
}

// FUNCTION EXPRESSION
const fn = function () {
  console.log("HI!");
};

// Constructor Function
const hi = new Function("value", "console.log('HI ' + value);");
// console.log(hi);

const welcome = function (value) {
  console.log("Welcome " + value);
};
