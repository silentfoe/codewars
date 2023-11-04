// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// my solution:

function sevenAte9(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === "7" && str[i + 1] === "7" && str[i] === "9") {
      newStr += "";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// code wars solution using regex:

function sevenAte9(str) {
  return str.replace(/79(?=7)/g, "7");
}

// clever code wars solution:

function sevenAte9(str) {
  while (str.includes("797")) {
    str = str.replaceAll("797", "77");
  }
  return str;
}
