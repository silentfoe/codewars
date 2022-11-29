// Write a function that checks if a given string (case insensitive) is a palindrome.


// first attempt to solve

function isPalindrome(x) {
  
    let opposite = x.split('').reverse().join('')
  
    if(x.toLowerCase() === opposite.toLowerCase()) {
      
      return true
    }
    
    return false
    
  }