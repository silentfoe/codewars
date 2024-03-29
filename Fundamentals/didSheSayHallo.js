// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// my solution: 

function validateHello(greetings) {
  
  const hello = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
  
  //turning the string into lower case, filter out all the punctuation, and then join as one string
  let lower = greetings.toLowerCase().split('').filter(letter => letter !== letter.toUpperCase()).join('')
  
  //loop through the hello array and check if the word at the index is in the "lower" string
  for(let i = 0; i < hello.length; i++){
    if(lower.includes(hello[i])){
      return true
    }
  }
  
  return false
}