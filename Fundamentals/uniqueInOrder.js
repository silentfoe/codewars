// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// my solution: 

var uniqueInOrder=function(iterable){
  
  let arr = []
  // using for loop and pushing characters to array
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== arr[arr.length - 1]){
      arr.push(iterable[i])
    }
  }
  return arr
}

// solution using filter

var uniqueInOrder=function(iterable){
  
  return typeof(iterable) === 'string' ? 
    iterable.split('').filter((char,indx,arr) => arr[indx] !== arr[indx - 1] ? arr[indx] : '')
    :
    iterable.filter((char,indx,arr) => arr[indx] !== arr[indx - 1] ? arr[indx] : '');
}
