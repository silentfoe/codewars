// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)


// my solution: 

function firstNonRepeated(s) {
  
  let arr = s.split('')
  //loop through the string and check if the index of the character in the string is equal to the last index of the character.
  //If true, this is the first character that is unique, if not the loop goes to the next character in the string. 
  for(let i = 0; i < s.length; i++){
    if(arr.indexOf(s[i]) === arr.lastIndexOf(arr[i])){
      return s[i]
    }
  }
  //returns null if all chacters in the string are repeated. 
  return null
}