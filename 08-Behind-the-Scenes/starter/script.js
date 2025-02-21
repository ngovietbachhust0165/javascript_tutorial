'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     // console.log(this);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
// var firstName = 'Matilda';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
// console.log(this);

// Solution 1
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// isMillenial();

// Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
// const addArrow = (a, b) => {
//   // console.log(arguments); // Error , arguments not define in arrow function
//   return a + b;
// };
// addArrow(2, 5);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(person, newLastName) {
  person.lastName = newLastName;
  return person;
}

const marriedJessica = marryPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before', jessica);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.family.push('Back');
jessicaCopy.lastName = 'Davis';
console.log(jessica2, jessicaCopy);
//Deep clone
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('Back');
jessicaClone.lastName = 'Davis';
console.log(jessica2, jessicaClone);
