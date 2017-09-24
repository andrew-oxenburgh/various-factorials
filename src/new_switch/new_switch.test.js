/*global require describe */
const assert = require('assert');
const forEach = require('mocha-each');

const functions = ['classic', 'nested_ternary'];

const conditions = [
    [-100, {type:'INCREMENT'}, -99],
    [-1, {type:'INCREMENT'}, 0],
    [0, {type:'INCREMENT'}, 1],
    [0, {type:'DECREMENT'}, -1],
    [1, {type:'DECREMENT'}, 0],
    [100, {type:'DECREMENT'}, 99],
    [100, {type:'unknown'}, 100],
];


const checkCounter = function (functionName, input, type, expected) {
    const fn = require('./new_switch.js')[functionName];
    assert.equal(fn(input, type), expected);
};

describe('counter', () => {
    let full_test = [];
    functions.forEach((fn) => {
        conditions.forEach((cond) => {
            full_test.push([fn, ...cond]);
        });
    });
    forEach(full_test)
        .it('"%s": %s, %s returns %s', (fn, input, type, expected) => {
            checkCounter(fn, input, type, expected);
        });
});