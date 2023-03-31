// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// my solution: 

function insertDash(num) {
  
  let numStr = num.toString()
  let dashes = ''
  
  for(let i = 0; i < numStr.length; i++){
     if(numStr[i] % 2 && numStr[i + 1] % 2){
       dashes += `${numStr[i]}-`
     }else {
       dashes += numStr[i]
     }
  }
  
  return dashes
}
