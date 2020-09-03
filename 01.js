#!/usr/bin/env node

//one line comment
//0. Declare two variables "snackServings" and "guests" and assign them number values.
var snackServings = 3;
var guests = 5;

//1. Add snackServings and guests.
console.log(snackServings+guests);

//2. Subtract guests from snackServings. Then, subtract snackServings from guests.
console.log(snackServings-guests);
console.log(guests-snackServings);

//3. Multiply snackServings and guests.
console.log(snackServings*guests);

//4. Divide snackServings by guests.
console.log(snackServings/guests);

//5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
var drinks = 10;
var resultOne = (snackServings*guests)/drinks
console.log(resultOne);

//6. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
var monkeys = 15;
var bananas = 9;
console.log (monkeys/bananas);

//7. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
var monkeyfights = 20;
var resultTwo = (monkeys + bananas)*monkeyfights;
console.log(resultTwo);

//8. Increment monkeys.
monkeys=monkeys++;

//9. Decrement bananas.
bananas=bananas--;

//10. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
var happiness = bananas-monkeys;
console.log(happiness+monkeyfights);

//11. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
console.log(resultOne%resultTwo);
