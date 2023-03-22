// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

// my solution: 

var mispelled = function(word1, word2){
  
  let count = 0
  
  if(word1.length === word2.length){
    for(let i = 0; i < word1.length; i++){
      if(word1[i] !== word2[i]){
        count += 1
      }
      
    }
  }
  
  let arrWord1 = word1.split('')
  let arrWord2 = word2.split('')
  
  let count1 = 0
  let count2 = 0
  
  for(let i = 0; i < word2.length; i++){
    if(arrWord1.indexOf(word2[i]) < 0){
      count2 += 1
    }
  }
  
  for(let i = 0; i < word1.length; i++){
    if(arrWord2.indexOf(word1[i]) < 0){
      count1 += 1
    }
  }

  return count < 2 && count1 < 2 && count2 < 2 

}


