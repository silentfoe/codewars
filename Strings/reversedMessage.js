// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

// my solution: 

function reverseMessage(str) {
  
  let newSentence = ''
  
  for(let i = str.length - 1; i >= 0 ; i--){
    newSentence += str[i].toLowerCase()
  }

  return str ? newSentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') : ''
              
}