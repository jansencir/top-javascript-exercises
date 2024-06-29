const repeatString = function(string, num) {
    let finalString = "";
    for (let i = 0 ; i < num ; i++) {
        if (i < num) {
            finalString += `${string}`;
        }
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
