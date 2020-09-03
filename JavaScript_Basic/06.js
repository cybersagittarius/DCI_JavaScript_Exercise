//0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
var dogIsBetter=true;
var catIsBetter=false;

//1. Check the result of:
//- a) dogIsBetter AND catIsBetter.
//- b) dogIsBetter OR catIsBetter.
//- c) NOT (dogIsBetter AND catIsBetter).

console.log(dogIsBetter && catIsBetter);
console.log(dogIsBetter || catIsBetter);
console.log(!(dogIsBetter && catIsBetter));

//2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
var atoms=100;
var sandGrains=1000;
var starsInSky=10000;

//3. Check the result of whether:
//- a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
//- b) atoms is NOT equal to sandGrains.
//- c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
//- d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
//- e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
//- f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.

console.log(atoms>starsInSky && atoms>sandGrains);
console.log(atoms!==sandGrains);
console.log(starsInSky<sandGrains || starsInSky>atoms);
console.log(atoms==starsInSky || atoms!==sandGrains);
console.log(atoms>= 10 && sandGrains<=10);
console.log(atoms*starsInSky<100 || atoms*sandGrains>100);

//4. BONUS: Explain in words the logic of each result in a comment after the result.


