// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// first attempt to solve

function fakeBin(x){
  
    let str = ''
    
    //going through numbers represented by x
    for(let i = 0; i < x.length; i++){
      
    //checking to see if the number is less than 5 and inserting 0 into str
    if(x[i] < 5){
        str += 0
    } else {
        //inserting 1 for any number 5 or above
        str += 1
      }
    }
  
    return str
    
  }
