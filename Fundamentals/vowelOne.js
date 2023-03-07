// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


// my solution: 

function vowelOne(s){

  const vowels = ['a','e','i','o','u']
  const lower = s.toLowerCase()
  let str = ''
  
  for(let i = 0; i < lower.length; i++){
    if(vowels.indexOf(lower[i]) === -1){
      str += 0
    }else{
      str += 1
    }
  }
  return str
}

// using ternary instead

function vowelOne(s){

    const vowels = ['a','e','i','o','u']
    const lower = s.toLowerCase()
    let str = ''
    
    for(let i = 0; i < lower.length; i++){
      vowels.indexOf(lower[i]) === -1 ? str += 0 : str += 1;
    }
    return str
  }
  