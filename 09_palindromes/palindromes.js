const palindromes = function (string) {
    // const chars = "abcdefghijklmnopqrstuvwxyz";
    reverseString = string.split("").reverse().join("");
    return string === reverseString;
};

/* pseudocode
    -take a string as a parameter
    -make a variable of lowercase letters
    -make a new string of just the lowercase letters
    -compare the new string with its reversed version
*/

// Do not edit below this line
module.exports = palindromes;
