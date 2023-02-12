// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my solution: 

// using for loop and pushing to a new array
function reverseWords(str) {
  
  let frags = str.split(' ')
  
  let sentence = []
  
  for(let i = 0; i < frags.length; i++){
    
   sentence.push(Array.from(frags[i]).reverse().join('')) 
    
  }
  
  return sentence.join(' ')
  
}

//refactor using map method 

function reverseWords(str) {
  
  return str.split(' ').map(char => Array.from(char).reverse().join('')).join(' ')
  
}
