// Write a program that sums up the first 10 natural numbers and prints out the result.
// The program should contain a function with a for loop that adds up the numbers.
// The function should take an int parameter n and return the sum of the first n numbers.

function sum(n){
    var sum = 0;
    for (i = 0; i <= 10; i++){
        sum = n += n;
        console.log(sum);
    }
    return sum;
}


sum(1);
