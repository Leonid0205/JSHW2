// Task 1

let num1 = Number(prompt('Input num1: '));
let num2 = Number(prompt('Input num2: '));
if (num1 <= 1) {   
    alert(`${num1} <= 1`)    
}
if (num2 >= 3) {
    alert(`${num2} >= 3`)
}

// Task 2

let test = true;
(test === true) ? console.log('+++') : console.log('---');

// Task 3

let day = Number(prompt('Input a number between 1 and 31: '));
if (day >= 1 && day <= 10) {
    console.log(`Day ${day} is in first decade of the month`);
} else if (day > 10 && day <= 20) {
    console.log(`Day ${day} is in second decade of the month`);
} else if (day > 20 && day <= 30) {
    console.log(`Day ${day} is in third decade of the month`);
} else console.log(`Day ${day} does not belong to any decade!`);