// let js = "amazing";

// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23)

// let firstName = "Jonas";
// console.log(firstName);
// let PI = 3.1415;

// let country = "VietNam";
// let continent = "Asia";
// let population = 90;
// const isIsland = false;
// let language;
// language = 'vietnamese';
// console.log(country)
// console.log(continent)
// console.log(population)
// console.log(isIsland)
// console.log(language)

// const now = 2025
// const ageMe = now - 2002;
// const ageMeNextYear = now + 1  - 2002;
// console.log(ageMe, ageMeNextYear)

// console.log(true)

// console.log(typeof true)

// let year;
// console.log(year)
// console.log(typeof year)

// const firstName = "Bach";
// const lastName = "Ngo";
// const job = "Programer";
// const birthYear = 2002;

// const textOut = `I'm ${firstName} ${lastName}, a ${2024-birthYear} years old ${job} `;
// console.log(textOut);

// console.log(`Multiple 
// line
// string`);

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('Sarah can start driving license ✔🎁🎂')
// } else {
//     const yearLeft = 18 - age ;
//     console.log(`Sarah is too young. Wait another ${yearLeft} years :)😂`)
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIJohn < BMIMark) {
//     console.log("Mark's BMI is higher than John's!");
// }else{
//     console.log("John's BMI is higher than Mark's!");
// }

// if (BMIJohn > BMIMark) {
    
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }else{
    
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }

// type conversion

// const inputYear = '1991';
// console.log(Number(inputYear));

// console.log(Number('Jonas'));
// console.log(String(23), 23);

// // type coercion 

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3 )

// 5 falsy values: 0 , '', undefined, null , NaN
// {} empty object is truly values
// let height = 0 ; // height is defined but can't check because 0 is falsy value
// if (height) {
//     console.log('Good ! Height is defined');
// }else {
//     console.log('Height is UNDEFINED')
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult :D');
// if (age == '18') console.log('Type coercion');

// const favourite =  Number(prompt("What's your favourite number ?"));
// console.log(favourite)
// console.log(typeof favourite)

// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense); // not operation

// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;
// if (scoreDolphins > scoreKoalas) console.log(`Dolphins win the trophy`);
// else if (scoreDolphins < scoreKoalas) console.log(`Koalas win the trophy`);
// else console.log(`Both win the troph`);

// const day = 'wedneday'
// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday': // wednesday and thursday same code 
//         console.log('Write code example');
//         break;
//     case 'friday':
//         console.log('Record video');
//         break;
//     default:
//         console.log('Not a valid day!');
// }
 
// if is statement 
// conditional operator: the ternary operator
// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water'); // if is statement but this is expression so :
// console.log(`${age >= 18 ? 'I like to drink wine' : 'I like to drink water'}`);
const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = 50 <= bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);