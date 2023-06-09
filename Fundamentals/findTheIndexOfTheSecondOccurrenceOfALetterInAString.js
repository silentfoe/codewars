// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1


// my solution: 

function secondSymbol(s, symbol) {
  
  if(s.indexOf(symbol) === -1 || s.lastIndexOf(symbol) === s.indexOf(symbol)){
    return -1
  }
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === symbol && s.indexOf(symbol) !== i){
      return i
    }
  }
  
}
