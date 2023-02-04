// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


//my first solution using the index method: 

function findUniq(arr) {
  
    for(let i = 0; i < arr.length; i++){
        //checking to see if the index of the number is the last place where the number is found. if it is, this must be the different number.
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        return arr[i]
      }
    }
  }
  

  // using for loop instead to solve

function findUniq(arr) {
    // set a point on the first number in the array
    let num = arr[0]
    //compare if the first number matches the last number, if it does then find the different number in between the two numbers with the find method
    if(num === arr[arr.length - 1]){
      return arr.find(char => char !== num)
    }else{
      //if the first and last number dont match, compare the first to the second number and if they match the last number must be the different number  
      if(num === arr[1]){
        return arr[arr.length - 1]
      }else{
        //if the first and the last number dont match, and the first and the second number dont match, the first number must be the different number
        return num
      }
    }
  }
  