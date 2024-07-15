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

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let total = 1;
	if (a == 0) {
    total = 1;
  } else {
    for (let i = a; i > 0; i--) {
      total *= i;
    }
  }
  return total;
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
