// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// my solution: 

function nearestSq(n){
  //check if n is a square => if so return n 
  // math floor to find lowest integer, square it and subtract it from n to find distance
  // math ceil to find highest integer, square it and subtract n from it to find distance
  // compare floor to ceil distance and return the lower distance from n
  let sqrt = Math.sqrt(n)
  let lower = Math.floor(Math.sqrt(n))
  let lowerSq = lower ** 2
  let higher = Math.ceil(Math.sqrt(n))
  let higherSq = higher ** 2
  
  return sqrt % 1 === 0 ? sqrt : higherSq - n > n - lowerSq ? lowerSq : higherSq;
}