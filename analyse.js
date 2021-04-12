const analyse = (arr) =>{
    const object ={
        min: Math.min(...arr),
        average: arr.reduce((a,b) => a+b)/arr.length,
        max: Math.max(...arr),
        length: arr.length,
    }

    return object;
}

module.exports = analyse;
