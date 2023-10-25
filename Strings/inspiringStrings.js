// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

// my solution:

function longestWord(stringOfWords) {
  const length = stringOfWords.split(" ").map((word) => word.length);
  const words = stringOfWords.split(" ");

  return words[length.lastIndexOf(Math.max(...length))];
}

// two cool solutions found on code wars page:

//1
let longestWord = (s) =>
  s.split(" ").reduceRight((a, b) => (b.length > a.length ? b : a));

//2
function longestWord(str) {
  return str
    .split(" ")
    .sort((b, a) => b.length - a.length)
    .pop();
}
