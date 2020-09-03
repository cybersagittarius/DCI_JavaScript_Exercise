//1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 
var totalSell = 6450;
var ticket= 15;
console.log("THe movie theater sold " + totalSell/ticket + " tickets.");

//2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
var income = 500;
console.log ("Slyvia makes "+ income*52 + " dollar a year.");

//3. Calculate the percentage of 17/30. Expected output: number%
let perCent=(17/30)*100;
console.log ("17/30 is "+ perCent.toFixed(2) +"%.");

//4. Calculate the perimeter of a square. Assume each side is 4.75cm.
var side=4.75;
console.log ("The perimeter of a square of 4.75cm is "+ 4*side + "cm.");

//5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
var triPeri=5+6+7;
console.log ("a triangle of sides of 5, 6, 7 cm respectively is "+ triPeri + "cm long.");

//6. Calculate the area of a square. Each side is 5cm.
var side=5;
console.log("The area of a square of each side of 5cm is "+ Math.pow(side, 2) +".");

//7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
var Triarea = (5*7)/2;
console.log("The area of a triangle of lengths of 5, 6, 7 cm respectively is "+ Triarea +" big.");

//8. Calculate the volume of a cube. Length of each side is 9cm.
console.log("THe volume of a cube of 9cm is "+ Math.pow(9, 3) +".");

//Q9. Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip

let bill1=22.35*1.1;
var bill2=26.67*1.15;
var bill3=35.92*1.2;
console.log ("The three bills are: " + bill1.toFixed(2) +", "+ bill2.toFixed(2) +", "+bill3 + " respectively.");

//10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
//What is Noemy's average hours working per day?
var totalHour = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
var sum =0;
for (var index=0; index<totalHour.length; index++) {
    sum=sum+totalHour[index];
}
console.log("The average hours of working for the past 2 weeks is "+ sum/10 +".");

//11.A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
//Expected output: Score in the sixth test: --.
var pastScores=[75, 70, 85, 90, 100];
var pastScoreTotal=0;

for(var i=0; i<pastScores.length; i++){
    pastScoreTotal=pastScoreTotal+pastScores[i];
} 
var sixthTest= (85*6)-pastScoreTotal;
console.log("The sixth test outcomes needs to be "+sixthTest+"!");

//12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
//Expected output: James needs a minimum of --% to get an 80% average.
var ninethAssessment = (80*9)-(78*8);
console.log("James needs a minimum of", ninethAssessment+"%","to get the ideal average!");

