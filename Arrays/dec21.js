// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//my first solution: 
function twoSort(s) {
  
    let str = ''
    
    let word = s.sort().shift()
    
    for(let i = 0; i < word.length; i++){
     
      str += `${word[i]}***`
    }
   
    return str.slice(0,-3)
      
  }

  

//getting down to one line return using map
function twoSort(s) {

    return s.sort().shift().split('').map(char => `${char}***`).join('').slice(0,-3)
    
   }
   