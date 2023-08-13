// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

// my solution: 

function initials(n){

  return n
    .split(' ')
    .map((word, indx, arr) => indx === arr.length - 1 ?  word[0].toUpperCase() + word.slice(1) : word[0].toUpperCase() )
    .join('.')
  
}