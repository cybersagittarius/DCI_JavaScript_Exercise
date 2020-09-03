//#### 1. NaN
//**Question: Comment your answer in your js file**: What does NaN stand for? 
//* Check if `"hello"` is NaN. 
//* Check if `3` is NaN.
//* What is the type of NaN?

//NaN stands for "Not a Number".
console.log(isNaN("hello")? "This string is a NaN": "This string is a not NaN");

//#### 2. Rounding 
//```javascript
var rNumber=(0.1*10 * 0.2*10)/100;
console.log(rNumber);
console.log(rNumber.toFixed(2));//this is alternative way by using a method. 

//#### 3. Infinity
//* Divide Infinity by `0`. 
//* Divide Infinity by Infinity. 
//* Divide `1` by `0`.

console.log(Infinity/0);
console.log(Infinity/Infinity);
console.log(1/0);




