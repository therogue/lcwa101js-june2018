// Define a function numSeries that takes a number n and returns a string
// that summarizes the first n positive integers as '1 2 3 ... n'.

// See examples below.

console.log(numSeries(12)); // 1 2 3 ... 12
console.log(numSeries(7));  // 1 2 3 ... 7
console.log(numSeries(6));  // 1 2 3 4 5 6
console.log(numSeries(5));  // 1 2 3 4 5
console.log(numSeries(2));  // 1 2

//1. If number is A cont everything
//2. If number is B :
//cont out the first three numbers (123)
//cont out remaining numbers with ...
//cont out remaining numbers with n


function numSeries(n) {
    var seriesString = '';
    if (n <= 6) {
        for (i = 1; i < n; i++) {
        seriesString += `${i} `;
        }
    } else {
        seriesString += `1 2 3 ... `;
    }
    seriesString += `${n}`
    return seriesString //value
}
console.log(numSeries(12));
