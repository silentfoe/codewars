// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


//first attempt while using regular expressions

function replace(s){
  
  
    return s.replace(/[a,e,i,o,u]/ig, "!")
    
    
  }

//using for loop to solve

function replace(s){
  
  let wrd = ''
  
  let vowels = ['a','e','i','o','u']
  
  for(let i = 0; i < s.length; i++){
    
    if(vowels.indexOf(s.toLowerCase()[i]) >= 0) {
      
      wrd += '!'
      
    } else {
      wrd += s[i]
    }
    
  }
  
  return wrd
}
