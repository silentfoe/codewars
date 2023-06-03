// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.


// my solution: 

function mostLikely(prob1,prob2){
  
  let arr1 = prob1.split(':').map(item => 1 * item)
  let arr2 = prob2.split(':').map(item => 1 * item)
  
  return (arr1[0] / arr1[1]) > (arr2[0] / arr2[1])
  
}