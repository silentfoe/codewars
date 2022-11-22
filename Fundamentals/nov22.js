// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// first attempt at problem

function opposite(number) {
  
    if(Math.sign(number) === -1){
      
      return (number * -1)
      
    }
      
    return (number * -1)
      
  };



  // refactor for one line using ternary operator

  const opposite = number => Math.sign(number) === -1 ? number * -1 : number * -1; 
  


  // what I should have done but was overthinking the problem. This is after looking at the solutions on code wars. -_-

  const opposite = number => -number;