The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// my solution:

function solve(s){

  const vowels = ['a','e','i','o','u']
  let str = ''
  
  for(let i = 0; i < s.length; i++){
    if(vowels.indexOf(s[i].toLowerCase()) === -1){
      str += '*'
    }else{
      str += s[i]
    }
  }

  return Math.max(...str.split('*').map(char => char.length))
}