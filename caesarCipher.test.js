const caesarCipher = require('./caesarCipher');

it('test 1', () =>{
    expect(caesarCipher('Hello world', 0)).toMatch('Hello world');
});

it('Test 2', () =>{
    expect(caesarCipher('Hello world', 3)).toMatch('Hhoor zruog');
});

it('Test 3', () =>{
    expect(caesarCipher('Hello world', 50)).toMatch('Hcjjm umpjb');
});

it('Test 4', () =>{
    expect(caesarCipher('Hello world!', 5)).toMatch('Hjqqt btwqi!');
});