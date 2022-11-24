// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



// first attempt at solving the problem


function findShort(s){
  
    //split every string where there is a space
    let words = s.split(' ')
    
    //get an array with the lengths for every string in number form 
    let length = words.map( string => string.length)
    
    //find the lowest number in the array and return that number 
    return Math.min(...length)
  }


