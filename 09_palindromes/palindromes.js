const palindromes = function (string) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cleanString = string
        .toLowerCase() 
        .split("")
        .filter(char => chars.includes(char))
        .join("");
    let reverseString = cleanString
        .split("")
        .reverse()
        .join("");
    return cleanString === reverseString;
};

/* pseudocode
    -take a string as a parameter
    -make a variable of lowercase letters
    -make a new string of just the lowercase letters
    -compare the new string with its reversed version
*/

// Do not edit below this line
module.exports = palindromes;
