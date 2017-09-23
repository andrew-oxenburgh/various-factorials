/*global require describe it */
let assert = require('assert');
let factorial = require('../index.js').factorial;

let checkFactorial = function (input, expected) {
    assert.equal(factorial(input), expected);
};

describe('Factorial', function () {
    describe('should accept string reps of numbers', function () {
        it('factorial 0 should be 1', function () {
            checkFactorial('1', 1);
        });
    });
    describe('should return undefined on error', function () {
        it('factorial -1', function () {
            checkFactorial(-1, undefined);
        });
        it('factorial doesnt work on fractions', function () {
            checkFactorial(1.1, undefined);
        });
        it('factorial doesnt work on arrays', function () {
            checkFactorial([], undefined);
        });
        it('factorial undefined', function () {
            checkFactorial(undefined, undefined);
        });
        it('factorial null', function () {
            checkFactorial(null, undefined);
        });
        it('factorial empty string', function () {
            checkFactorial('', undefined);
        });
    });
    describe('good cases', function () {
        it('factorial 0 should be 1', function () {
            checkFactorial(1, 1);
        });
        it('factorial 1 should be 1', function () {
            checkFactorial(1, 1);
        });
        it('factorial 2 should be 2', function () {
            checkFactorial(2, 2);
        });
        it('factorial 3 should be 6', function () {
            checkFactorial(3, 6);
        });
        it('factorial "3" should be 6', function () {
            checkFactorial('3', 6);
        });
        it('factorial 10 should be 36282800', function () {
            checkFactorial('3', 6);
        });
    });
});
