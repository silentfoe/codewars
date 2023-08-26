// Task
// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

// In practice, you should implement this function:

// function eliminateUnsetBits(number);
// Examples
// eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
// eliminateUnsetBits("111") ->  7
// eliminateUnsetBits("1000000") -> 1
// eliminateUnsetBits("000") -> 0

// my solution: 

function eliminateUnsetBits(number) {
  
  const binary = number.split('').filter(num => num === '1').join('')
  
  return binary.length > 0 ? parseInt(binary,2) : 0
}