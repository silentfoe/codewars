// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// my solution: 

reverse = function(array) {
  
  let arr = []
  
  for(let i = 0; i < array.length; i++){
    arr.unshift(array[i])
  }
  return arr
  
}