// This is a version of the FizzBuzz program where the branching logic 
// to determine what to print out for each number is placed inside a
// function. The function should take one parameter (the number) and
// use the if-else branching logic to return the appropriate string for that 
// number.

function fizzBuzz (number){
    if (number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz")
      } else if (number % 3 === 0) {
        console.log("Fizz")
      } else if (number % 5 === 0){
        console.log("Buzz");
      } else {
        console.log(number);
      }
}

fizzBuzz(6);