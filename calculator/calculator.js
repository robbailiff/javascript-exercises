function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	if(arr.length === 0){
		return 0;
	} else {
		const sum = arr.reduce((total, currentNumber) => {
			return total + currentNumber;
		});
		return sum;
	}
}

function multiply (arr) {
	if(arr.length === 0){
		return 0;
	} else {
		const sum = arr.reduce((total, currentNumber) => {
			return total * currentNumber;
		});
		return sum;
	}
}

function power (a, n) {
	return a ** n;
}

function factorial (n) {
	let total = 1;
	for(let i = n; i > 0; i--) {
		total *= i
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}