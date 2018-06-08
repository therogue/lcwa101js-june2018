// Values are food.
// Values are stored in memory containers.
// Variables

// ["H", "e", "l", "l", "o"] ["Hello"]
// [1, 2, 3, 4, 5] 
// ["1", "2", "3", "4", "5"] ["12345"]

// LCWA101JS Unit 1 Notes

var x = 3;
var y = [1, 2, 3, 4, 5];
var fruits = ['apples', 'bananas', 'oranges', 'kiwis']

var randomN = Math.floor((Math.random() * 10) + 1) % 5; // Get a number between 0 and 4

// y[0], y[1], y[2], y[3], y[4]

console.log('My random number is ' + randomN +  ' and y is ' + y[randomN]);
for(var i = 0; i < 100; i++) {
    var randomFruit = Math.floor((Math.random() * 10)) % fruits.length;
    console.log(`My random fruit number is ${randomFruit} and my random fruit is ${fruits[randomFruit]}`);
}

for(var i = 0; i < y.length; i++) {
    console.log(y[i]);
}

console.log("Hello World");