// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

// my solution: 

function explode(s) {
  
  let str = ''
  
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s[i]; j++){
      str += s[i]
    }
  }
  
  return str
  
}