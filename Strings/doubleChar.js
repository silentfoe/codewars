// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//first attempt to solve

function doubleChar(str) {
  
    let newstr = ''
    
    for(let i = 0; i < str.length; i++){
      
      newstr += str[i] + str[i]
    }
    
    return newstr
  }
  