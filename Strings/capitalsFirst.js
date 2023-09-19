// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// my solution: 

function capitalsFirst(str){
  let cap = []
  let lower = []
  
  const spltStr = str.split(' ')
  
  for(let i = 0; i < spltStr.length; i++){
    if(spltStr[0][0] === spltStr[0][0].toUpperCase()){
      cap.push(spltStr[i])
    }else{
      lower.push(spltStr[i])
    }
  }
  console.log(lower)
}