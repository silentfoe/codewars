// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


// my solution: 

var greet = function(name) {

  const lowerName = name.toLowerCase()
  const capName = lowerName[0].toUpperCase() + lowerName.slice(1)
  
  return `Hello ${capName}!`
  
};