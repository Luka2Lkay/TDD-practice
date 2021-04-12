const caesarCipher = (str, shift) => {
    if (shift === 0) return str;
  
     const result = str.replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
    );

    return result;
  };
  
  module.exports = caesarCipher;