// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


//first attempt at the problem

function removeChar(str){
 
    //taking away the first character and the last by returning the string from index 1 through last index minus 1(shown by -1)
    return str.slice(1,-1)
  
  };



  //refactor for one line


  const removeChar = str => str.slice(1,-1)