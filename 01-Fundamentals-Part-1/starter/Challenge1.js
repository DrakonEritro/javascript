//**CHALLENGE 1**

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 95;

// /*const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;*/

// let markBmi = Math.round((markWeight/markHeight**2 + Number.EPSILON)*100)/100;
// let johnBmi =  Math.round((johnWeight/johnHeight**2 + Number.EPSILON)*100)/100;
// let markHigherBMI = markBmi > johnBmi;
// console.log(markBmi);
// console.log(johnBmi);
// console.log(markHigherBMI)

// //**CHALLENGE 2**

// if(markHigherBMI) {
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
// } else {
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})!`);
// }

//**CHALLENGE 3**
//     //Dolphins:
//     let dolpScore1 = 97;
//     let dolpScore2 = 112;
//     let dolpScore3 = 101;
//     let dolpAvrg = (dolpScore1 + dolpScore2 + dolpScore3)/3;
//     console.log(`Dolphins score average is ${dolpAvrg}`); //result check

//     //Koalas:
//     let koalScore1 = 109;
//     let koalScore2 = 95;
//     let koalScore3 = 106;
//     let koalpAvrg = (koalScore1 + koalScore2 + koalScore3)/3;
//     console.log(`Koalas score average is ${koalpAvrg}`); //result check

// if(dolpAvrg >= 100 || koalpAvrg >= 100) {
//     if(dolpAvrg == koalpAvrg) {
//         console.log("It's a draw!");
//     } else if(dolpAvrg > koalpAvrg) {
//         console.log("Dolphins have the higher score average");
//     } else if (dolpAvrg < koalpAvrg) {
//         console.log("Koalas have the higher score average");
//     }
// } else
//     console.log("Both teams score average is below 100")

//**CHALLENGE 4

let bill = 40;
const tip = bill >= 50 && bill <= 300 ? (bill * 15)/100 : (bill * 20)/100;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);