// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// my solution: 

// there are only 3 known wilson primes per wikipedia

function amIWilson(p) {
  if(p === 5 || p === 13 || p === 563){
    return true
  }
  
  return false
}