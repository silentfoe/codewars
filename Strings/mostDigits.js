// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// my solution: 

function findLongest(array){
 
  const len = array.map(num => num.toString().length)
  
  return array[len.indexOf(Math.max(...len))]
}