// 8 kyu Is the string uppercase?

// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// my solution: 

String.prototype.isUpperCase = function() {
  //"this" is an object. Need to use the "toString()" method in order to use the === operator to check if it's true or false by turning the object into a string. 
  return this.toString() === this.toUpperCase()
  
}