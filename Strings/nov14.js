// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//First attempt at working out a solution

function solution(str){

    // takes the string and splits for every character, reverses the order of the characters, and then joins the characters back together with no spaces
    return str.split('').reverse().join('')
    
  }