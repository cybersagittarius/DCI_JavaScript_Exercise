//## 1. Minimum and maximum
//### a. Lowest Number
const aList=[-1, 0, 1, 2, 3, 4];
//practice using const as a prefix to define a variable. Once a const is defined, the number attached to const cannot be changed.
console.log(aList);

//### b. Highest Number
console.log(Math.max(...aList));

//## 2. Rounding
//### a. Round up
//Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
var bList=[3321.32321, 326.76, 76788.7, -9.78, 43.342];
console.log(bList);
var i;
for(i=0; i<bList.length; i++) {
    console.log("The number is", Math.round(bList[i]), "\n"); 
}
//### b. Round down
//Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
var j;
for(j=0; j<bList.length; j++) {
    console.log("The number is",Math.floor(bList[j]), "\n"); 
}
//## 3. Dice Roll!
//Create a program that prints a random **_integer_** from 1 - 6.
function myDice () {
    console.log(Math.floor(Math.random()*6)+1);
}

myDice();




