// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

// my solution:

var splitInParts = function (s, partLength) {
  let str = "";

  for (let i = 0; i < s.length; i += partLength) {
    str += s.slice(i, i + partLength) + " ";
  }

  return str.slice(0, -1);
};
