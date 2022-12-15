// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


//first attempt to solve

function shortcut (string) {
  
    let vowels = ['a','e','i','o','u']
    
    let str = ''
    
    for(let i = 0; i < string.length; i++){
      
      if(vowels.indexOf(string[i]) === -1 ){
        
        str += string[i]
      }
      
    }
    
    return str
    
  }