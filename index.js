/*global exports */

let notValid = (number) => (
    (typeof number !== 'number' && typeof number !== 'string')
    || isNaN(number)
    || number < 0
    || (number.trim && number.trim() === '')
    || (typeof number === 'number' && !Number.isInteger(number))
);

exports.factorial = function factorial(number) {
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
