/*global require describe*/
const assert = require('assert');
const forEach = require('mocha-each');


let checkFactorial = function (fn, input, expected) {
    const factorial = require('../index.js')[fn];
    assert.equal(factorial(input), expected);
};

describe('factorial', () => {

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

    const functions = ['factorial_loop'];

    let full_test = [];

    for (let fn in functions) {
        for (let cond in conditions) {
            let this_test = [];
            this_test.push(functions[fn]);
            this_test.push(conditions[cond][0]);
            this_test.push(conditions[cond][1]);
            full_test.push(this_test);
        }
    }

    forEach(full_test)
        .it('%s returns %s', (fn, input, expected) => {
            checkFactorial(fn, input, expected);
        });
});