// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// my solution: 

function gordon(a){
  const noAVowels = ['e', 'i', 'o', 'u']
  
  return a.split(' ').map(word => {
    return word.split('').map(letter => {
      if(letter === 'a'){
        return '@'
      }else if (noAVowels.includes(letter)){
        return '*'
      }else {
        return letter.toUpperCase()
      }
    }).join('')
  }).join('!!!! ') + '!!!!'
}