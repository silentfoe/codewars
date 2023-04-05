// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// my solution: 

function sumArray(array) {
  
  if(array === null || array === undefined || array.length < 3){
    return 0
  }

  let total = 0
  let sorted = array.sort((a,b) => a - b)
  
  for(let i = 1; i < sorted.length - 1; i++){
    total += sorted[i]
  }
  return total
}

// using ternary and reduce:

function sumArray(array) {
  
  return !array || array.length < 3 ? 0 
  : array.sort((a,b) => a - b).reduce((prev,curr,indx) => (prev + curr) ,0) - (array[0] + array[array.length-1])

}
