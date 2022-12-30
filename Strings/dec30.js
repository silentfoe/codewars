// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"


//first attempt to solve

function reverse(string){
  
    return string.split(' ').reverse().join(' ')
  }

  
  //solving using reverse for loop

  function reverse(string){
  
    let str = []
    
    let split = string.split(' ')
    
    for(let i = split.length - 1; i >= 0; i--){
      
      str.push(split[i])
      
    }
    
    return str.join(' ')
  }