//1. What type? 
//* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
//**Questions: Comment your answers in the js file.** 
//* Is there a difference? Why/why not? 
//* Which comparison operator should we generally use? Why?
//* What would happen if we were to use `=`?
var check1=3; 
var check2="3";
console.log(check1=check2);
console.log(check1==check2);
console.log(check1===check2);
//The answer is true, though in theory it is different. check1 is a number and check2 is a string.

//2. Not
//* Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

var aNumber=true;
console.log(aNumber!=true? "Ha, this is false!": "Doch, doch, this is true!");

//#### 3. Short Circuit
//Given the code below, what will print when when we console log `name`? Comment your answer in the js file.
//javascript

let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);

//I think the answer would be Stacey since firstName has been assigned a value to. 