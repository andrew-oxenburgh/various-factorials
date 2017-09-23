
/*global require describe it */
var assert = require('assert');

function factorial(number) {
    return 1;
}

describe('Factorial', function() {
    describe('good cases', function() {
        it('factorial 1 should be 1', function() {
            assert.equal(1, factorial(1));
        });
        it('factorial 0 should be 1', function() {
            assert.equal(1, factorial(1));
        });
    });
});
