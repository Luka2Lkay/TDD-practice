const { it, expect } = require('@jest/globals');
const calculator = require('./calculator');

it('Test 1: addition', () =>{
    expect(calculator.addition(1,3)).toBe(4)
})

it('Test 1b: addition', () =>{
    expect(calculator.addition(1,3)).toBeGreaterThan(3)
})

it('Test 2: substraction', () =>{
    expect(calculator.substraction(5,2)).toBe(3)
})

it('Test 2b: substraction', () =>{
    expect(calculator.substraction(5,2)).toBeLessThan(4)
})

it('Test 3: multiplication', () =>{
    expect(calculator.multiplication(8,2)).toBe(16)
})

it('Test 3b: multiplication', () =>{
    expect(calculator.multiplication(8,2)).toBeLessThan(20)
})


