// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:


// first attempt to solve

function greet (name, owner) {
  
    if( name === owner) {
      
      return `Hello boss`
    }
    
    return `Hello guest`
  }


  // using ternary operator instead

  const greet = (name,owner) => name === owner ? `Hello boss` : `Hello guest`;
