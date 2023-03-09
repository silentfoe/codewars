// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// my solution: 

function swap (string) {
  
  const vowels = ['a','e','i','o','u']
  
  let capVow = ''
  
  for(let i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i]) === -1){
      capVow += string[i]
    }else {
      capVow += string[i].toUpperCase()
    }
  }
  return capVow
}


// using map

function swap (string) {
  
  const vowels = ['a','e','i','o','u']
  
  return string.split('').map(char => vowels.indexOf(char) === -1 ? char : char.toUpperCase()).join('')
}
