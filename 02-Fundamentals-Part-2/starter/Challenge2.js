'use strict';   
// let team1, team2;
// const teamName1 = 'Dolphins';
// const teamName2 = 'Koalas';

//     //Dolphins:
//     const t1S1 = 85;
//     const t1S2 = 54;
//     const t1S3 = 41;
//     const t1Sum = t1S1+t1S2+t1S3;

//     //Koalas:
//     const t2S1 = 23;
//     const t2S2 = 34;
//     const t2S3 = 27;
//     const t2Sum = t2S1+t2S2+t2S3;

//     const calcAverage = games =>{
//        team1 = t1Sum / games;
//        team2 = t2Sum /games ;
//         //console.log(team1, team2)
//     } 

// const numberOfGames = calcAverage(3); //inserir aqui o nr de jogos
// // console.log(team1, team2) //controlo de calc

// function checkWinner() {
// if (team1 >= 2 * team2) {
//     console.log(`Dolphins win! (${team1} vs. ${team2})`);
// } else if (team2 >= 2 * team1) {
//     console.log(`Koalas win! (${team2} vs. ${team1})`);
// } else if (team1 == team2) {
//     console.log('It was a draw');
// } else console.log('None of the teams managed to get double points');
// }
// checkWinner()


// //let bill = 125;
// let tip;
// function calcTip (bill) {

// tip = bill >= 50 && bill <= 300 ? (bill * 15)/100 : (bill * 20)/100;

// }

// const bills = [125, 555, 44]
// const tips = [];
// const total = [];
// for (let index = 0; index < bills.length; index++) {
//     calcTip(bills[index]);
//     tips.push(tip);
// }
// console.log(tips)
// for (let index = 0; index < bills.length; index++) {
//     total.push(bills[index] + tips[index]);
// }
// console.log(total);

// const mark = {
// firstName: 'Mark',
// lastName: 'Miller',
// weight: 78,
// height: 1.69,

// calcbmi: function(){
//     this.bmi = Math.round((this.weight/this.height**2 + Number.EPSILON)*100)/100;
//     return this.bmi;
// }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,
    
//     calcbmi: function(){
//         this.bmi = Math.round((this.weight/this.height**2 + Number.EPSILON)*100)/100;
//         return this.bmi;
//     }
//     }

// let winner, loser;
// mark.calcbmi()> john.calcbmi() ? (winner = mark, loser = john): (winner = john, loser = mark)
// // console.log(winner, loser) // test control

// console.log(`${winner.firstName} ${winner.lastName} (${winner.bmi}) is higher than ${loser.firstName} ${loser.lastName} (${loser.bmi})!`)

let tip;
function calcTip (bill) {

tip = bill >= 50 && bill <= 300 ? (bill * 15)/100 : (bill * 20)/100;

}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (let index = 0; index < bills.length; index++) {
    calcTip(bills[index]);
    tips.push(tip);
    total.push(bills[index] + tips[index]);
}
console.log(bills, tips, total)

const calcAverage = function(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }
   return sum / arr.length;
   }

   console.log(calcAverage(total));
   console.log(calcAverage(tips));