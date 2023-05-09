// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// my solution: 

function getNumberFromString(s) {
  
  let num = ''
  
  for(let i = 0; i < s.length; i++){
    if(s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58){
      num += s[i]
    }
  }
  
  return +num
}