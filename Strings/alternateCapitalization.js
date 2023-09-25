// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// my solution: 

function capitalize(s){
  const even = s.split('').map((char,indx) => indx % 2 ? char : char.toUpperCase()).join('')
  const odd = s.split('').map((char,indx) => indx % 2 ? char.toUpperCase() : char).join('')
  
  return [even,odd]
};