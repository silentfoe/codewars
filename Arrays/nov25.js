// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.


// first attempt to solve with reduce method

function sum (numbers) {
  
    return numbers.reduce((prev,curr) => prev + curr,0)
      
      
  };


  // using for loop instead of reduce method

  function sum (numbers) {
    
  
    let initial = 0
    
    for(let i = 0; i < numbers.length; i++) {
      
      initial += numbers[i]
    }
    
    return initial
      
      
  };