// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// first attempt to solve problem


function sumTwoSmallestNumbers(numbers) {  
  
  
    //sort through to get numbers ordered
    let sorted = numbers.sort((prev,next) => prev - next)
    

    //return the smallest and second smallest 
    return sorted[0] + sorted[1]
      
    }


    