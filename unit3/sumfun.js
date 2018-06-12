// Write a program that sums up the first 10 natural numbers and prints out the result.
// The program should contain a function with a for loop that adds up the numbers.
// The function should take an int parameter n and return the sum of the first n numbers.

function sum(n){
    var n = 0;
    for (i = 1; i <= 10; i++){
        n = n + i;
        console.log(n);
    }
    return "The sum is " + n;
}


sum();
