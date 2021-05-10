const { test, expect } = require('@jest/globals')
const functions = require('../index')

test('adds numbers to equal a sum',() => {
    let a = 1;
    let b = 4;
    let sum = a + b;
    expect(functions.add(a,b)).toBe(sum);
})

