const removeFromArray = function(anArray, toRem) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == toRem) {
            anArray.splice(i, 1);
        }
        else {
            continue;
        }
    }
    return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
