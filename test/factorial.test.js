/*global require describe*/
const assert = require('assert');
const factorial = require('../index.js')['factorial_loop'];
const forEach = require('mocha-each');


let checkFactorial = function (input, expected) {
    assert.equal(factorial(input), expected);
};

describe('factorial', () => {
    forEach([
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
    ])
        .it('%s returns %s', (input, expected) => {
            checkFactorial(input, expected);
        });
});