// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// my solution: 

// if the letter + 10 is over 26 then you have to subtract 26 from the letter plus 10 to equal what the new letter is. this number will have to subtract 1 from it in order to match up to the corresponding index for the alphabet listed 

function moveTen(s){
  
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    let str = ''
    
    for(let i = 0; i < s.length; i++){
      let num = alpha.indexOf(s[i]) + 10
      
      if(num > 25){
        str += alpha[num - 26]
      }else{
        str += alpha[num]
      }
    }
    
    return str
  }