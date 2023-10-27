// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

// my solution:

function tripleX(str) {
  const letterXIndx = str.indexOf("x");

  return str[letterXIndx + 1] === "x" && str[letterXIndx + 2] === "x";
}

// cool solution on the code wars solved page:

const tripleX = (str) => {
  let x = str.indexOf("x");
  return x > -1 && x === str.indexOf("xxx");
};
