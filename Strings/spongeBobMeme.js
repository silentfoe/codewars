// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

// my solution:

function spongeMeme(sentence) {
  
  let str = ''
  
  for(let i = 0; i < sentence.length; i++){
    if(i % 2){
      str += sentence[i].toLowerCase()
    }else{
      str += sentence[i].toUpperCase()
    }
  }
  return str
}