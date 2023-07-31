// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.

// my solution: 

function nextPal(val) {
    
  // want to start at the next number after value 
  // check to see if the number matches the number to string split and reversed 
  // if it does, return the number. If not, go to the next number in the sequence
  
  let checkPal = val + 1
  
  while(val < checkPal){
    if(val + 1 ===  +(checkPal.toString().split('').reverse().join(''))){
      return checkPal
    }
    val++
    checkPal++
  }
  
}