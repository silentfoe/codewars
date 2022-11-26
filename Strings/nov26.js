// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// first attempt at solving problem

function sumMix(x){
  
  
    return x.reduce((prev,curr) => Number(prev) + Number(curr), 0)
    
  
  }


// using the "+" unary operator to change the string to an int

function sumMix(x){
  
  
    return x.reduce((prev,curr) => +prev + +curr, 0)
    
  
  }


  // can also use the "~~" like the unary operator

  function sumMix(x){
  
  
    return x.reduce((prev,curr) => ~~prev + ~~curr, 0)
    
  
  }

