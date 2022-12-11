// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );



// my first attempt to solve  this

var capitals = function (word) {
	
    return word.split('').map((char,indx) => char !== char.toLowerCase() ? indx : '').filter(String)
        
    };
    