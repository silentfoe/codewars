// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//my solution:

function position(letter){

    let pos = letter.charCodeAt(letter) - 96
    
    return `Position of alphabet: ${pos}`
    
    
  }