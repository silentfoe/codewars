// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// *** note that the \n should not be included in the solution

// my solution: 

function toCsvText(array) {
   
    let str = ''
    
    for(let i = 0; i < array.length; i++){
      
      if(array.indexOf(array[i]) === (array.length -1)){
        str += array[i]
        
      }else {
        str += array[i] +'\n' 
      }
    }
    return str
  }
  
  //using join method
  
  function toCsvText(array) {
     
    return array.join('\n')
  }
  