const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^\w\d]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  };

// Do not edit below this line
module.exports = palindromes;
