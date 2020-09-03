//for any number from 0 to 100
//print "foo" if it is divisible by 4 
//and print "baz" if it is divisible by 3

//I modified the program to print out the number which can be divided both by 3 and 4 to print out "Foo and Baz"
//The printout also include the number generated so users can check what number is being generated.
//For any other number users can see three exclamation marks.

function FooBaz () {
    var aNumber=Math.floor(Math.random()*100);
    
    if (aNumber%3==0 && aNumber%4==0){
        console.log(aNumber, "Foo and Baz!");
    } 
    else if (aNumber%3==0) {
        console.log(aNumber, "Foo!");
    }  
    else if (aNumber%4==0) {
        console.log(aNumber, "Baz");
    }  
    else {
        console.log("!!!");
    }
}

FooBaz();