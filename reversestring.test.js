const { it, expect } = require('@jest/globals');
const reverse = require('./reversestring');

it('Test 1', ()=>{
    expect(reverse('hello')).toMatch('olleh');
})

it('Test 2', ()=>{
    expect(reverse('Hello')).toMatch('olleH');
})