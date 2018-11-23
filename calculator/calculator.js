function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (nums) {
	return nums.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);
}

function multiply (nums) {
	return nums.reduce(function(accumulator, currentValue) {
		return accumulator * currentValue;
	});
}

function power(a, b) {
	let total = 1;
	for (let i = 0; i < b; i++) {
		total *= a;
	}
	return total;
}

function factorial(num) {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1;
	} else {
		return (num * factorial(num-1));
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}