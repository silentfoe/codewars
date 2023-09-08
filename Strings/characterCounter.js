// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

// my solution: 

// turn the string into all lower case in order to get rid of any capital letters
// want to use the reduce function in order to count the number of times each letter appears and store that in an object
// count each value in the object and if each value is equal return true, else return false

function validateWord(s){
  
  const lowerCase = s.toLowerCase().split('')
  
  const letterObj = lowerCase.reduce((prev,curr) => {
    return prev[curr] ? prev[curr]++ : prev[curr] = 1, prev
  },{})
  
 return (Object.values(letterObj).reduce((prev,curr) => prev + curr,0) / Object.keys(letterObj).length) 
        === 
        letterObj[lowerCase[0]]

}

// solution from code wars that is much cleaner (saw after solving on my own): 
function validateWord(s, c = s.toLowerCase()){
	return c.length % new Set(c).size == 0
}