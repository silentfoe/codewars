// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// my solution: 

function getCount(str) {
  
    const vowels = ['a','e','i','o','u']
    let lower = str.toLowerCase()
    
    let count = 0
    
    for(let i = 0; i < lower.length; i++){
      if(vowels.indexOf(lower[i]) > -1){
        count += 1
      }
    }
    return count
    
  }