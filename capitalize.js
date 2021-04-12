const capitalize = (str) =>{
    const firstLetter = str[0].toUpperCase();
    const remaining = str.slice(1,);
    const fullString = `${firstLetter}${remaining}`;

    return fullString;
}

module.exports = capitalize;