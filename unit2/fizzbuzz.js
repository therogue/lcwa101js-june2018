// FizzBuzz is a popular programming problem. 

// This program currently runs through the first 30 integers and prints them.

// Change the program to print out the integers using the following rules instead:

// 1. If the number is divisible by 3, print out 'Fizz' instead of the number.
// 2. If the number is divisible by 5, print out 'Buzz' instead of the number.
// 3. If the number is divisible by both 3 and 5, print out 'FizzBuzz' instead of the number.
// 4. Otherwise, print the number.

// for (i=1; i <= 30; i++) {
//   console.log(i);

// }


for (i=1; i <= 30; i++) {
  //console.log(i);
  if ([i] % 3 === 0 && [i] % 5 === 0){
    console.log("FizzBuzz")
  } else if ([i] % 3 === 0) {
    console.log("Fizz")
  } else if ([i] % 5 === 0){
    console.log("Buzz");
  } else {
    console.log([i]);
  }
}