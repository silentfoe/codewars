// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// my solution: 

function solve(s){

  let nums = ''
  for(let i = 0; i < s.length; i++){
    if(s[i].toUpperCase() === s[i].toLowerCase()){
      nums += s[i]
    }else{
      nums += '*'
    }
  }
  
  return Math.max(...nums.split('*').map(num => +num))
  
};