const add = function(a, b) {
  return a + b;
};

const subtract = function(c, d) {
	return c - d;
};

const sum = function(arr) {
  let total = 0;
  for (let i in arr) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  if (arr.includes(0)) {
    total = 0;
  } else {
    for (let i in arr) {
      total *= arr[i];
    }
  }
  return total;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
