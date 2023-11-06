// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// my solution:

function numObj(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let obj = {};
    obj[s[i].toString()] = String.fromCodePoint(s[i]);

    arr.push(obj);
  }

  return arr;
}

// using map to solve problem:

function numObj(s) {
  return s.map((num) => ({ [num.toString()]: String.fromCharCode(num) }));
}
