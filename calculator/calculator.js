function add (x, y) {//Input Variables X & Y.
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {//Input is an array.
    let totalSum = 0;
	if (arr == []) {
        return 0;
    }
    for (i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    return totalSum;
}

function multiply (arr) {
    let totalMultiply = 1;
    for (i = 0; i < arr.length; i++) {
        totalMultiply *= arr[i];
    };
    return totalMultiply;
}

function power(x, y) {
    let square = x
	for (i = 1; i < y; i++) {
        square *= x;
    };
    return square;
}

function factorial(num) {
    let multiply = num;
    let drop = num;
	if (num == 0 || num == 1) {
        return 1;
    };
    for (i = 1; i < num; i++) {
        multiply *= (drop - 1);
        drop--;
    };
    return multiply;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}