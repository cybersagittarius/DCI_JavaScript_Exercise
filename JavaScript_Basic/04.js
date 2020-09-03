//1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

var isDog = myDog = "Snoopy";
if (myDog == isDog) {
    console.log("pat pat pat!");
} else {
    console.log("Find me a dog!");
}
//Ternary:
//var dog="Dackel";
//var animalAtHand="Dackel";
//isDog=dog==animalAtHand;
//console.log( isDog? "pat, pat": "find me a dog to pat!");

//2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
var speedCheck = 50;
var currentSpeed = 60;
if (currentSpeed > speedCheck) {
    console.log("you're going too fast!!");
} else {
    console.log("You're driving below the speed limit, Oma!");
}

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
var checkAge = 16;
var nowAge=88;
if (nowAge < checkAge) {
    console.log("serve butter beer");
} else {
    console.log("serve beer!");
}

//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
var isStudent=true;
var aStudent=true;
if (aStudent==isStudent) {
    console.log("Ticket costs €5,00");    
} else {
    console.log ("Ticket costs €12,00");
}

//5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". 
var okMarie=true;
var cake=true;
if (cake==okMarie) {
    console.log("let them eat cake!");
} else {
    console.log("Oh bother!");
}

//6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
//* 30
//* 939
//* 40.9

var n1=30;
var n2=939;
var n3=40.9;
n1%2==0? console.log(n1,"is an even number."): console.log(n1,"is an odd number.");
n2%2==0? console.log(n2 + " is an even number."): console.log(n2 + " is an odd number.");
n3%2==0? console.log(n3,"is an even number."): console.log(n3,"is an odd number.");


