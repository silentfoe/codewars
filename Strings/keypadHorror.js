// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

// my first solution: 

function computerToPhone(numbers){
  
  const computer = '0789456123'
  const cellPhone = '0123456789'
  let correctNum = ''
  
  for(let i = 0; i < numbers.length; i++){
    correctNum += cellPhone.indexOf(computer[numbers[i]])
  }
  return correctNum  
}

// second attempt with using map

function computerToPhone(numbers){
  
    const computer = '0789456123'
    const cellPhone = '0123456789'
    
    return numbers.split('').map(num => cellPhone.indexOf(computer[num])).join('') 
  }
  