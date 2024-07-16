const palindromes = function (string) {
    return string == string
        .split()
        .reverse()
        .join("");
};

/* pseudocode
    -
*/

// Do not edit below this line
module.exports = palindromes;
