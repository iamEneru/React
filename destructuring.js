// Array Destructuring
const numbers = [1, 2, 3];
let [num1, num2] = numbers;

console.log(num1, num2);

let [n1, , n3] = numbers;

console.log(n1, n3);

// Object Destructuring
const person = {
  name: "Max",
  age: 28,
};

let { name, testing, age } = person;

console.log(name);
console.log(testing);
console.log(age);