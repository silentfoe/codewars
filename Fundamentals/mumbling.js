// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// my solution: 

function accum(s) {
  
  let newArr = []
  
  const arr = s.toLowerCase().split('')
  
  
  for(let i = 0; i < arr.length; i++){
    let holder = ''
    for(let j = 0; j <= i; j++){
      if(j === 0){
        holder += (arr[i].toUpperCase())
      }else{
        holder += (arr[i])
      }
    }
    newArr.push(holder)
  }
  
  return newArr.join('-')
  
}
