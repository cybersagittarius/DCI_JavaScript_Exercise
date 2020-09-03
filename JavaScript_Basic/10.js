//0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
var apples=20;
var oranges=30;
console.log("We have", apples, "apples, and",oranges, "oranges.");

//1. Check whether apples and oranges are equal.
apples==oranges? console.log("That is right! We have the same number of apples and oranges!") : console.log("Not that is not true. We do not have the same number of apples and oranges.");

//2. Check whether apples and oranges are *not* equal.
apples!=oranges? console.log("That is right, we do not have the same number of apples and oranges"): console.log("That is wrong, we do have the same number of apples and oranges.");

//3. Check whether apples is greater than oranges.
apples>oranges? console.log("We have more apples than oranges."): console.log("We have fewer apples than oranges.");

//4. Check whether apples is less than or equal to oranges.
apples<=oranges? console.log("We have less or equal number of apples."): console.log("We have more apples.");

//5. Check whether oranges is greater than apples.
apples>=oranges? console.log("We have more apples than oranges."): console.log("We have more oranges than apples.");

//6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
var mangoes=5;
var mApples=mangoes*apples;
var mOranges=mangoes+oranges;
mApples>=mOranges? console.log("We have more mangoes and apples!"): console.log("We have more mangoes and oranges!");

//7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
var aMangoes=apples-mangoes;
var oMangoes=oranges/mangoes;
aMangoes<=oMangoes? console.log("We have fewer apples after mangoes being subtracted."): console.log("We have more apples after mangoes being subtracted.");

//8. Check whether mangoes, apples and oranges are equal.
mangoes==apples==oranges? console.log("Yes we have the same number of mangoes, apples, and oranges"): console.log("We do not have the same number of mangoes, apples, and oranges.");

//9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
var remainderApples=apples%mangoes;
var remainderOranges=oranges%mangoes;
remainderApples==remainderOranges? console.log("the remainder is equal."): console.log("the remainder is not equal.");

//10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
var AppleswithMangoes=apples+mangoes;
var OrangewithoutMangoes=oranges-mangoes;
AppleswithMangoes>OrangewithoutMangoes? console.log("We have more mangoes and apples together."): console.log("We have more oranges without mangoes.");

//to make the output to point to the true statement, just change the greater than to less than.
//also change the console.log string output to correspond to the change from greater than to less than.
AppleswithMangoes<OrangewithoutMangoes? console.log("We have fewer mangoes and apples together."): console.log("We have fewer oranges without mangoes.");

//11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
//See above.