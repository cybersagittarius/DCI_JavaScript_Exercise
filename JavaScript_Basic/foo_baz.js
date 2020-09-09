//for any number from 0 to 100
//print "foo" if it is divisible by 4 
//and print "baz" if it is divisible by 3

//I modified the program to print out the number which can be divided both by 3 and 4 to print out "Foo and Baz"
//The printout also include the number generated so users can check what number is being generated.
//For any other number users can see three exclamation marks.
//I understand this question differently from other classmates. Instead of doing a for loop to exame which number can be divided by 3 or 4, I interpret this question as get a random number between 0 and 100 then to exam if it can be divided by 3, 4, or neither.
//I tried the newer way to write a funtion. Instead of using    function xxx { }, I used the arrow as follows:
const FooBaz = () => {
    var aNumber=Math.floor(Math.random()*101);
    
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

/*returns a random integer from 0 to 100
var bNumber=Math.floor(Math.random()*101);
console.log("the bNumber is", bNumber);*/

/* This is the solution from the teacher
for (let i = 0; i <= 100; i++){
    let output = "";
    if ( i % 4 == 0) output += "Fizz "; 
    if (i % 3 == 0) output += "Buzz ";
    if (i === 0) output = 0;
    console.log(output || i);
    }*/

/* This is the solution from one of my classmates.
    let fooCounter = 0;
    let bazCounter = 0;
    let fooBazCounter = 0;
    let restCounter = 0;
    for (let i = 0; i <= 100; i++) {
      // all numbers besides foo, baz and foo baz
      if ((i % 4 !== 0 && i % 3 !== 0) || i === 0) {
        console.log("I'm just a number", "(" + i + ")");
        //console.log("I")
        restCounter++;
      }
      // only baz numbers
      else if (i % 3 === 0 && !(i % 3 === 0 && i % 4 === 0)) {
        console.log("Baz", "(" + i + ")");
        bazCounter++;
      }
      // only foo numbers
      else if (i % 4 === 0 && !(i % 3 === 0 && i % 4 === 0)) {
        console.log("Foo", "(" + i + ")");
        fooCounter++;
      }
      // the rest, meaning foo baz only
      else {
        console.log("Foo Baz !", "(" + i + ")");
        
        fooBazCounter++;
      }
  
      // Remember when we finished
      var end = new Date().getTime();
  
      // Now calculate and output the difference
      console.log("EXECUTION TIME:", end - start, "ms");
  
    }
    console.log(
      "Amount of Normal: " +
        restCounter +
        "\n" +
        "Amount of Baz': " +
        bazCounter +
        "\n" +
        "Amount of Foo: " +
        fooCounter +
        "\n" +
        "Amount of Foo Baz: " +
        fooBazCounter +
        "\n" +
        "Total Amount:: " +
        (restCounter + bazCounter + fooCounter + fooBazCounter) +
        "\n" +
        "...::: End of Programm :::..."
    );
  }
  foo_baz(); */
  
    