// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// my solution: 

function twoArePositive(a, b, c) {
  let count = 0
  let positiveA = Math.abs(a)
  let positiveB = Math.abs(b)
  let positiveC = Math.abs(c)
  
  if(a !== 0 && a === positiveA){
    count++
  }
  if(b!== 0 && b === positiveB){
    count++
  }
  if(c !== 0 && c === positiveC){
    count++
  }
  
  return count === 2
  
}