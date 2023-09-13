// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

// my solution:

// my notes on how to solve problem below

//split the original string by \n

// use the repeat method to duplicate each letter for each combination of letters that I split (loop over letters? map?)

// start a new array that holds n * the original array length, push each new instance of the repeated combination and join with the \n character (used string instead of array)

function scale(strng, k, n) {
  
  if(strng === ''){
    return ''
  }
  
  let newStr = ''
  
  strng.split('\n').map(word => {
    let str = ''
    for(let i = 0; i < word.length; i++){
      str += word[i].repeat(k)
    }
    newStr += ((str + '\n').repeat(n))
    
  })
  
  return newStr.slice(0,-1)
  
}