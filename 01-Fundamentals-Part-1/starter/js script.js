/*let js = 'amazing';
//if (js === 'amazing') alert("JavaScript is FUN!");
console.log(40+8+23-10);
console.log("BOB");
console.log("23");

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);*/

/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javaScriptIsFun = "YES!"*/

/* // Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schemedtmann';
console.log(firstName + ' ' + lastName);
// Assignment operators
let x = 10 + 5; // x = 15;
x += 10; // x = x+10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x +1
x--; // x = x -1
x--;
console.log(x);

// Comparison operators
console.log(;ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); */

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
// console.log(25-10-5);
let x, y;
x=y=25-10-5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) /2
console.log(ageJonas, ageSarah, averageAge);*/

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(jonasNew);

console.log('String with \n\ multiple \n\ lines');
console.log(`String with 
multiple
ines`);*/

/*const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log("Sarah can start her driving license 🚗");
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years 👍`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
century = 21;
}
console.log(century);*/

/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);
// type coercion

console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n);*/

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log(`Don't spend it all!`);
} else{
    console.log(`You should get a job!`);
}

let height = 0; //tal como acontece acima o zero retorna boolean false e ele assume com undefined
if(height) {
    console.log(`Yay! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
} */

/*const age = "18";
if(age === 18) console.log('You just became an adult :) (strict)');
if(age == 18) console.log('You just became an adult :) (loose)');

const favourite = Number(prompt(`What's your favourite number`));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log(`Cool! 23 is an amazing number!`)
} else if(favourite === 7) {
    console.log(`7 is also a cool number`)
} else if(favourite === 9) {
    console.log(`9 is also a cool number`)
} else {
    console.log(`Number is not 23 or 7 or 9`)
}

if(favourite !== 23) console.log('Why not 23?')*/

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense&&hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// /*const shouldDrive = hasDriversLicense&&hasGoodVision;
// if(shouldDrive) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }*/

// const isTired = false; //C
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }
/*
const day = 'wednesday';
switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
    break;
    case 'tuesday':
        console.log('Prepare theory videos');
    break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    break;
    case 'friday':
        console.log('Record videos');
    break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend 😎`);
    break;
    default:
        console.log('Not a valid!');
}

if(day === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if( day === "tuesday") {
    console.log('Prepare theory videos');
} else if(day === "wednesday" || day === "thursday") {
    console.log('Write code examples');
} else if (day === "friday") {
    console.log('Record videos');
} else if (day === "saturday" || day === "sunday") {
    console.log(`Enjoy the weekend 😎`);
} else {
    console.log('Not a valid!');
}
*/

const age = 23;
age >=18 ? console.log('I like to drinke wine 🍷') :
console.log('I like to drink water 💧');

const drink = age >=18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >=18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine 🍷' : 'water 💧'}`);