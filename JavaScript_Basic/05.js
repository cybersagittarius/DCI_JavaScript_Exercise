//1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
var wBear = "WinniePooh";
console.log(wBear);

//2. Access the 2nd and 6th elements of the string. Print the elements to the console. **Make sure you have selected the right index numbers** 
console.log("The second element of the string is " + wBear[1] + ", and the 6th element is " + wBear[5] + ".");

//3. Declare a variable called name and assign a string as a value. 
var name = "WonderlandAlice";

//4. Declare a variable called age and assign a number as a value. 
var age = 86;

//5. Declare a variable called year and assign a number as a value. 
var year = 2020;

//6. Print the following: "*name* is *age* in *year*", using your declared variables.
console.log(name + " is " + age + " in " + year + ".");

//7. Declare a variable called isMarried and assign a boolean value. 
var isMarried = true;

//8. Print the following "*name* is married: true/false", using your declared variables.
console.log(name + " is married: " + isMarried);

//9. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true.  Print "JavaScript is fun: true" to the console, using your declared variables. 
var programmingLanguage="JavaScript";
var isFun=true;
console.log(programmingLanguage +" is fun: "+ isFun);

//10. Print the J and S of JavaScript from the variable programmingLanguage to the console. 
console.log(programmingLanguage.indexOf("J"), programmingLanguage.indexOf("S"));
console.log(programmingLanguage[0], programmingLanguage[4]);

//11. Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length);
