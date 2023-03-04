// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// my solution: 

function sumNoDuplicates(numList) {
  
 let count = 0
 
 for(let i = 0; i < numList.length; i++){
   if(numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])){
     count += numList[i]
   }
 }
  return count
}