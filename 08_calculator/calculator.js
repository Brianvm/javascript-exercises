const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((acc, current) => acc * current, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	const numbers = [];
  for (let i = num; i >= 1; i--) {
    numbers.push(i);
  }
  return numbers.reduce((acc, current) => acc * current, 1);
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
