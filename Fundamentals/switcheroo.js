// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// my solution: 

function switcheroo(x){
  
  let str = ''
  
  for(let i = 0; i < x.length; i++){
    if(x[i] === 'a'){
      str += 'b'
    }else if(x[i] === 'b'){
      str += 'a'
    }else {
      str += 'c'
    }
  }
  
  return str
  
}

// solving using map:

function switcheroo(x){
  
  return x.split('').map(letter => letter === 'a' ? letter = 'b' : letter === 'b' ? 'a' : 'c' ).join('')
}