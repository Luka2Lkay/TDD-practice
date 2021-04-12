const { it, expect } = require('@jest/globals')
const capitalize = require('./capitalize')

it('Test 1', () =>{
    expect(capitalize('matshebelele')).toMatch('Matshebelele');
})

it('Test 2', () =>{
    expect(capitalize('lukhaNyo')).toMatch('LukhaNyo');
})
