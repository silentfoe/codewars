// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// my solution: 

function capitalize(s,arr){
  
  let letters = s.split('')
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] <= s.length){
      letters[arr[i]] = letters[arr[i]].toUpperCase()
    }
  }
  
 return letters.join('')

};