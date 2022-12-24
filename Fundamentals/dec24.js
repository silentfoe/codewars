// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


//first attempt using reg ex

function reverseLetter(str) {
  
    return str.match(/[a-z]/g).reverse().join('')
            
  }



//using for loop instead of reg ex

  function reverseLetter(str) {
  
    let word = []
    
    for(let i = 0; i < str.length; i++){
      
    //checking to see if the character at str[i] is a letter by checking the lower case against the upper case. Will return true only in the case of a letter
      if(str[i].toLowerCase() !== str[i].toUpperCase()){
        //adding the letters in revese order
        word.unshift(str[i])
      } 
    }
    //joing the array to make a string
    return word.join('')
    
  }