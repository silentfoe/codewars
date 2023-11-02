// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// my solution:

function correctPolishLetters(string) {
  let str = "";

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "ą":
        str += "a";
        break;
      case "ć":
        str += "c";
        break;
      case "ę":
        str += "e";
        break;
      case "ł":
        str += "l";
        break;
      case "ń":
        str += "n";
        break;
      case "ó":
        str += "o";
        break;
      case "ś":
        str += "s";
        break;
      case "ź":
        str += "z";
        break;
      case "ż":
        str += "z";
        break;
      default:
        str += string[i];
    }
  }
  return str;
}

// cool solution on code wars solution page

function correctPolishLetters(string) {
  var dict = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

// another cool solution found on the code wars solution page:

var polishLetters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

function correctPolishLetters(string) {
  return string
    .split("")
    .map((c) => polishLetters[c] || c)
    .join("");
}
