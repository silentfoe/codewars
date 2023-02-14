// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


// my solution: 

function largest(n, array) {
  
    let arr = []
    
    while(n > 0){
      arr.unshift(Math.max(...array))
      array.splice(array.indexOf(Math.max(...array)),1)
      n--
    }
    
    return arr
  }