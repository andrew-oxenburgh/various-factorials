/*global exports */

let notValid = (number) => (
    (typeof number !== 'number' && typeof number !== 'string')
    || isNaN(number)
    || number < 0
    || (number.trim && number.trim() === '')
    || (typeof number === 'number' && !Number.isInteger(number))
);

exports.loop = function (number) {
    if (notValid(number)) {
        return undefined;
    }
    if (number == 0) {
        return 1;
    }

    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
    }
    return sum;
};

exports.tail_end_recursion = function recurse(number, prod=1) {
    if (notValid(number)) {
        return undefined;
    }
    if (number == 0 || number === 1) {
        return prod;
    }
    return recurse(number - 1, prod * number);
};

exports.non_tail_end_recursion = function recurse(number) {
    if (notValid(number)) {
        return undefined;
    }
    if (number == 0 || number === 1) {
        return 1;
    }
    return number * recurse(number - 1);
};
