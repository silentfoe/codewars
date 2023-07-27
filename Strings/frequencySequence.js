// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// my solution: 

function freqSeq(str, sep) {
  // need to pull out all values for each letter -- did this with the reduce method
  const letterMultiples = [...str].reduce((prev,curr) => {
    prev[curr] = prev[curr] || 0
    prev[curr]++
    
    return prev
  },{})

  // need to create an array which holds the times each letter appears in the string
  let arr = []
  
  for(let i = 0; i < str.length; i++){
    arr.push(letterMultiples[str[i]])
  }
  
  // need to join the numbers array with the seperator
  return arr.join(sep)

}




