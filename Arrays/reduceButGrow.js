// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


//first attempt

function grow(x){
  
    return x.reduce((prev,curr) => prev * curr)
  
  }


  //using for loop to solve

  function grow(x){
  
    let ans = 1
    
    for(let i = 0; i < x.length; i++){
      
      ans *= x[i]
    }
    
    return ans
  }