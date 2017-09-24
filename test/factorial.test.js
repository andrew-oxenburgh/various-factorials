/*global require describe*/
const assert = require('assert');
const forEach = require('mocha-each');

const functions = ['loop', 'tail_end_recursion', 'non_tail_end_recursion'];

const conditions = [
    [-1, undefined],
    [1.1, undefined],
    [[], undefined],
    [{}, undefined],
    ['', undefined],
    [' ', undefined],
    ['asdb', undefined],
    [undefined, undefined],
    [null, undefined],
    ['0', 1],
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [10, 3628800],
];

let checkFactorial = function (fn, input, expected) {
    const factorial = require('../index.js')[fn];
    assert.equal(factorial(input), expected);
};

describe('factorial', () => {

    let full_test = [];

    functions.forEach((fn) => {
        conditions.forEach((cond) => {
            full_test.push([fn, ...cond]);
        });
    });

    forEach(full_test)
        .it('"%s": %s returns %s', (fn, input, expected) => {
            checkFactorial(fn, input, expected);
        });
});