// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']


// my solution: 

function spacey(array){
  
  let arr = [array[0]]

  for(let i = 1; i < array.length; i++){
    arr.push(arr[i - 1] + array[i])
  }
 
 return arr
}

// my second solution to not include the first index of the initial array: 

function spacey(array){
  
  let arr = []
  
  for(let i = 0; i < array.length; i++){
    if(i === 0){
      arr.push(array[0])
    }else{
      arr.push(arr[i - 1] + array[i])
    }
  }
 
 return arr
}