// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// my solution:

function removeConsecutiveDuplicates(s) {
  
  let arr = s.split(' ')
  let words = []
  
  for(let i = 0; i < arr.length; i++){
    if(words[words.length - 1] !== arr[i]){
      words.push(arr[i])
    }
  }
  
  return words.join(' ')
}
