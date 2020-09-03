//#### 1. Concatenation. 
//* Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
//```javascript
let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log("\'''javascript\n", introSentence, age, "\n\'''");
//* In this case, what is the `+` operator doing? Comment your answer in the js file.
//in this case, a + operator is the same as a ',' to concatenate different data types in an output.

//#### 2. Converting 
//* Create a variable with the value of "1005". Convert it to a number.
//* Create a variable with the value of "10.05". Convert it to a number. 
var num1=1005;
var num2=10.05;
num1=num1.toString();
console.log(num1, num2.toString());
console.log(typeof(num1), typeof(num2));