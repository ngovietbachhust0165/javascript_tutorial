'use strict';
// function logger() {
//     console.log('My name is Bach')
// }

// logger();
// logger();
// logger();

//function declarations can call before define code

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice)

//function declarations can call before define it
// const age1 = calcAge1(1991);

// function calcAge1(brithYear) {
//     const age = 2037 - brithYear;
//     return age;
// }

// // const age1 = calcAge1(1991);
// console.log(age1);

// //function expression 
// const calcAge2 = function (brithYear) {
//     return 2037 - brithYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

//Arrow function 


// const calcAge3 = brithYear => 2037 - brithYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (brithYear, firstName) => {
//     const age = 2037 - brithYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, "Back"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// const calcAge = function (brithYear) {
//     return 2037 - brithYear;
// }

// const yearsUntilRetirement = function (brithYear, firstName) {
//     const age = calcAge(brithYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         return retirement;
//     }else  {
//         return -1;
//     }
//     // return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// Array

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];   // error because const , but can change each item in array
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// const calcAge = function (brithYear) {
//     return 2037 - brithYear;
// }

//Array methods

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add
// const newLength = friends.push('Jay'); // add element to end of array
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');  // add element to begin of array 
// console.log(friends);

// // Remove elements
// console.log(friends.pop()); //remove last element
// console.log(friends);

// friends.shift(); //first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));


// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// friends.push(23);
// console.log(friends.includes('23'));

// Object: key values fair 


// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']); // can pass expression to get string

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn =  prompt('What do you want to know about Jonas? Choose between firstName ...');
// console.log(interestedIn);
// console.log(jonas[interestedIn]);
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }else {
//     console.log('Wrong request !');
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonassh';
// console.log(jonas);
// console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     brithYear: 1991,
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Steven', 'Peter'],
//     hasDriversLicense: false,

//     // calcAge: function(brithYear) {
//     //     return 2037 - brithYear;
//     // }
//     // calcAge: function(){
//     //     return 2037 - this.brithYear;
//     // }
//     calcAge: function(){
//         this.age = 2037 - this.brithYear;
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license`
//     }
// };

// // console.log (this.calcAge(1991));
// // console.log (jonas['calcAge'](1991));
// // console.log (jonas.calcAge(jonas.brithYear));
// console.log (jonas.calcAge());
// console.log (jonas.age);
// console.log (jonas.age);
// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense?'a':'no'} driver's license`);
// console.log(jonas.getSummary());

// for (let i = 0 ; i < 10 ; i++){
//     console.log(`Lift weight ${i}`);
// }
// const jonas = ['Jonas', 'Schemedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];
// for (let i = 0 ; i < jonas.length ; i++){
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i]);
// }


// While loop 

// for (let i = 0 ; i < 10 ; i++){
//     console.log(`Lift weight ${i}`);
// }
// let rep = 1
// while (rep <= 10){
//     console.log(`Lift weight ${rep}`);
//     rep++;
// }

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
    console.log("go go");
    dice = Math.floor(Math.random() * 6) + 1;
}