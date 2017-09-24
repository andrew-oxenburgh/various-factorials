/*global module */

let notValid = (number) => (
    (typeof number !== 'number' && typeof number !== 'string')
    || isNaN(number)
    || number < 0
    || (number.trim && number.trim() === '')
    || (typeof number === 'number' && !Number.isInteger(number))
);

/**
 * A simple for each loop, iterating through the sequence
 */
function loop(number) {
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
}

/**
 *  Tail end recursion. A pure return statement means there is no stack required, and can be optimised away.
 */
function tail_end_recursion(number, prod = 1) {
    if (notValid(number)) {
        return undefined;
    }
    if (number == 0 || number === 1) {
        return prod;
    }
    return tail_end_recursion(number - 1, prod * number);
}

/**
 *  Recursion, but not tail end recursion. A stack is required to maintain the previous value.
 */
function non_tail_end_recursion(number) {
    if (notValid(number)) {
        return undefined;
    }
    if (number == 0 || number === 1) {
        return 1;
    }
    return number * non_tail_end_recursion(number - 1);
}

module.exports ={
    non_tail_end_recursion:non_tail_end_recursion,
    tail_end_recursion:tail_end_recursion,
    loop: loop
};