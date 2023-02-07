// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// my solution: 

function consonantCount(str) {
  
    const vowels = ['a','e','i','o','u',]
    let lower = str.toLowerCase()
    let throwAway = 0
    let count = 0
    
    for(let i = 0; i < lower.length; i++){
      //checking for any non alphabet characters or vowels
      if(lower[i] === lower[i].toUpperCase() || vowels.indexOf(lower[i]) > -1){
        throwAway += 1
      }else{
        count += 1
      }
    }
    return count
  }
  