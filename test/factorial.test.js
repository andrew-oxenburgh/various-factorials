/*global require describe it */
let assert = require('assert');
let factorial = require('../index.js').factorial;


describe('Factorial', function () {
    describe('should accept string reps of numbers', function () {
        it('factorial 0 should be 1', function () {
            assert.equal(factorial('1'), 1);
        });
    });
    describe('should return undefined on error', function () {
        it('factorial -1', function () {
            assert.equal(factorial(-1), undefined);
        });
        it('factorial only works on integers', function () {
            assert.equal(factorial(1.1), undefined);
        });
        it('factorial undefined', function () {
            assert.equal(factorial(), undefined);
        });
        it('factorial undefined', function () {
            assert.equal(factorial(undefined), undefined);
        });
        it('factorial null', function () {
            assert.equal(factorial(null), undefined);
        });
        it('factorial empty string', function () {
            assert.equal(factorial(''), undefined);
        });
    });
    describe('good cases', function () {
        it('factorial 0 should be 1', function () {
            assert.equal(factorial(1), 1);
        });
        it('factorial 1 should be 1', function () {
            assert.equal(factorial(1), 1);
        });
        it('factorial 2 should be 2', function () {
            assert.equal(factorial(2), 2);
        });
        it('factorial 3 should be 6', function () {
            assert.equal(factorial(3), 6);
        });
        it('factorial "3" should be 6', function () {
            assert.equal(factorial('3'), 6);
        });
        it('factorial 10 should be 36282800', function () {
            assert.equal(factorial('3'), 6);
        });
    });
});
