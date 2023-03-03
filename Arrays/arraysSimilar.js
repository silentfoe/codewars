// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

// my first solution: 

function arraysSimilar(arr1, arr2) {
  
    let sortArr1 = arr1.sort((a,b) => a - b)
    let sortArr2 = arr2.sort((a,b) => a - b)
    
    let arr = []
    
    for(let i = 0; i < sortArr1.length; i++){
      arr.push(sortArr1[i] === sortArr2[i])
    }
  return arr.every(char => char === true) && sortArr1.length === sortArr2.length
  }
  
  
  // using map to solve instead of loop
  
  function arraysSimilar(arr1, arr2) {
    
    let sortArr1 = arr1.sort((a,b) => a - b)
    let sortArr2 = arr2.sort((a,b) => a - b)
    
    if(sortArr1.length === sortArr2.length){
      return sortArr1.map((num,indx) => {
        return num === sortArr2[indx]
      }).every(char => char === true)
    }
   
    return false
  }
  