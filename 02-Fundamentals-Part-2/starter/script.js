'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive xD');

// const interface = 'Audio';
// const private = 534;

// function logger(){
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//Function declaration
// function calcAge1(birthyear) {
//     // const age = 2037 - birthyear;
//     return 2037 - birthyear;
// }

// const age1 = calcAge1(1991);
// // console.log(age1);

// // Function expression
// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


//Arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age =  2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));
// const calcAge = function(birthyear) {
//     return 2037 - birthyear;
// }

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age =  calcAge(birthyear);
//     const retirement = 65 - age;
//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired `)
//         return -1;
//     }
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Bob'));

// const friends = ['Michael', 'Steven','Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jay';
// console.log(friends);
// const firstname = 'Jonas'
// const Jonas = [firstname, 'Schmedtmann', 2037-1991, 'teacher', friends]
// console.log(Jonas);
// console.log(Jonas.length);

// //exercise
// const calcAge = function (birthyear) {
//     return 2037 - birthyear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1, age2, age3);

// const ages =[calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
// console.log(ages)

// add elements
// const friends = ['Michael', 'Steven','Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends)

// // Remove elements
// friends.pop(); // last
// const popped = friends.pop(); // last
// console.log(popped);
// console.log(friends);

// friends.shift(); //First

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }
// const jonasArray = [
// 'Jonas',
// 'Schemedtmann',
// 2037-1991,
// 'teacher',
// ['Michael', 'Peter', 'Stever']];

// console.log(jonasArray);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Stever']
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName'])

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

//console.log(jonas[interestedIn]);

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
// const f = jonas.friends[0]
// console.log(f);
// console.log(`${jonas.firstName} has ${jonas['friends'].length} friends, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Stever'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function(){
//     //     //console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//            return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;

//     }
// };
// //console.log(jonas.calcAge());
// //jonas.calcAge()

// //console.log(jonas.age);
// // console.log(jonas['calcAge'](1991));
// console.log(jonas.getSummary());

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
    
// }


// const jonasArray = [
// 'Jonas',
// 'Schemedtmann',
// 2037-1991,
// 'teacher',
// ['Michael', 'Peter', 'Stever'],
// true
// ];

// const types = [];

// for(let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
//    ages.push(2037 - years[index]);
    
// }

// console.log(ages)

// // continue and break
// console.log('------ ONLY STRING -------')
// for(let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i])

// }
// console.log('------ BREAK WITH NUMBER -------')
// for(let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i], typeof jonasArray[i])

// }
// const jonas = [
// 'Jonas',
// 'Schemedtmann',
// 2037-1991,
// 'teacher',
// ['Michael', 'Peter', 'Stever']
// ];

// for (let index = jonas.length -1; index >= 0; index--) {
//     console.log(index, jonas[index]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----------- Starting exercise ${exercise}`);
    
//     for (let rep = 0; rep < 6; rep++) {
//         console.log(`Exercise: ${exercise} Lifting weight repetition ${rep} 🏋️‍♂️`);
        
//     }
// }

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
    
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) +1;
console.log(dice);

while (dice !==6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if (dice === 6) console.log('Loop is about to end') 
};

