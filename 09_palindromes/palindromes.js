const palindromes = function (string) {
    let reverseString = "";
    for (let i = string.length -1; i >= 0; i--) {
        reverseString += string[i];
    }    
    return string == reverseString;
};

/* pseudocode
    -take a string as a parameter
    -compare the string to the reversed string
        -turn it into an array, split
        -reverse the array, reverse
        -join it back together, join
*/

// Do not edit below this line
module.exports = palindromes;
