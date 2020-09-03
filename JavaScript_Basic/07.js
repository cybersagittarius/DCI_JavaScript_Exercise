//1. What type? 
//* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
//**Questions: Comment your answers in the js file.** 
//* Is there a difference? Why/why not? 
//* Which comparison operator should we generally use? Why?
//* What would happen if we were to use `=`?
var check1=3; 
var check2="3";
console.log(typeof(check1), typeof(check2));
console.log(check1=check2);
console.log(check1==check2);
console.log(check1===check2);
console.log(check1!==check2);
console.log(check1!=check2);
//one = is to assign, two = sign is "equal to" by comparing assigned values, three = sign is "identical 
//not only to compare the assign value but to compare datatype.

//2.* Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
var aNumber=true;
console.log(aNumber!=true? "Ha, that is right, the value is false!": "Doch, doch, the value is supposed to be true!");

//#### 3. Short Circuit
//Given the code below, what will print when when we console log `name`? Comment your answer in the js file.
//javascript

let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);

//I think the answer would be Stacey since firstName has been assigned a value to. 