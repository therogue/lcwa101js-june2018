// Write a function numVowels that returns the number of vowels in a string.

function numVowels(string){
    let wordsplit = string.toString().toLowerCase().split("")
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var count = 0;

    for(i = 0; i <= wordsplit.length; i++){
            if (vowels.indexOf(wordsplit[i]) != -1) {
                count += 1;
                //what if I wanted to capture what word it matched or found?
              }
    }
    return count
}

console.log(numVowels(''));
console.log(numVowels('Phoenix, Arizona'));
console.log(numVowels('Abracadabra'));