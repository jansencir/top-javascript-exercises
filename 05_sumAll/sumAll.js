const sumAll = function(value1, value2) {
    let finalVal = 0;
    let smlVal;
    let bigVal;

    if (value1 < value2) {
        smlVal = value1;
        bigVal = value2;
    } else {
        smlVal = value2;
        bigVal = value1;   
    }
    
    for (i = smlVal; i <= bigVal; i++) {
        finalVal += i;
    }
    return finalVal;
};

// Do not edit below this line
module.exports = sumAll;
