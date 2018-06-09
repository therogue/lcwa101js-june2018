var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Write a for loop that will print all the odd numbers in the numbers array.

for (i=0; i <= numbers.length; i++){
    if (numbers[i] % 2 === 0){  // Good solution! Could you print the odd numbers instead?
        console.log(numbers[i]);
    }
}

//Even Numbers

for (i=0; i <= numbers.length; i++){
    if (numbers[i] % 2 === 1){
        console.log(numbers[i]);
    }
}