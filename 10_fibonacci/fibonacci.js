const fibonacciAtIndex = function(num) {
    if (num < 0) {
      return null; // Or throw an error, depending on your preference
    }
  
    if (num === 0) {
      return 0;
    }
  
    if (num === 1) {
      return 1;
    }
  
    let a = 0;
    let b = 1;
    let temp;
  
    for (let i = 2; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
    return a; // Return 'a', which holds the value at the specified index
  };

// Do not edit below this line
module.exports = fibonacci;
