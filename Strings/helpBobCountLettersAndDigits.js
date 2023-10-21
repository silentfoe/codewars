// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// my solution:

function countLettersAndDigits(input) {
  return [...input].filter((char, indx) => {
    return (
      (input.charCodeAt(indx) >= 48 && input.charCodeAt(indx) <= 57) ||
      (input.charCodeAt(indx) >= 65 && input.charCodeAt(indx) <= 90) ||
      (input.charCodeAt(indx) >= 97 && input.charCodeAt(indx) <= 122)
    );
  }).length;
}

// way better solution than mine I found on Code wars solution page

function countLettersAndDigits(s) {
  return s.replace(/[^a-z\d]/gi, "").length;
}

// another cool solution from code wars

function countLettersAndDigits(input) {
  let o = input.match(/[a-z\d]/gi);
  return o !== null ? o.length : 0;
}
