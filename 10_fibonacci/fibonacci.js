const fibonacci = function(num) {
    if (num == 0) {
        return 0;
    } else {
    let fibArray = [1, 1];
    for (let i = 1; i < num-1; i++) {
        let nextNum = (fibArray[i-1] + fibArray[i]);
        fibArray.push(nextNum);
    }
    return fibArray[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;

/* fibonacci
notes
    -sequence used: 1, 1, 2, 3, 5, 8, etc.
    -take an input number
    -run fibonacci sequence until input number is reached
    -return the number that the sequence ends up at
pseudocode
    -initiate function with one parameter
        -parameter is a number that the sequence will run to
    -create an array with numbers 1 and 1 to initialize the sequence
*/