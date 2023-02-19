// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.


// my solution:

function solve(s){
 
    let test = Array(4).fill(0)
    
    for(let i = 0; i < s.length; i++){
      if(s[i] !== s[i].toLowerCase()){
        test[0] += 1
      }else if(s[i] !== s[i].toUpperCase()){
        test[1] += 1
      }else if(Number(s[i]) === Number(s[i]) ){
        test[2] += 1
      }else {
        test[3] += 1
      }
    } 
    return test
}