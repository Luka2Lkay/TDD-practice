const analyse = require('./analyse');

it('Test 1', () =>{
    expect(analyse([1,8,3,4,2,6])).toEqual({
        
            average: 4,
            min: 1,
            max: 8,
            length: 6
          
    })
})

it('Test 2', () =>{
    expect(analyse([2,2,2,2])).toEqual({
        
            average: 2,
            min: 2,
            max: 2,
            length: 4
    })
})

it('Test 3', () =>{
    expect(analyse([0])).toEqual({
        
            average: 0,
            min: 0,
            max: 0,
            length: 1
    })
})