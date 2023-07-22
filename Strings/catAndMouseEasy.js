// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// my solution: 

function catMouse(x){

  return x.length - 2 > 3 ? "Escaped!" : "Caught!"
  
}

// written on one line: 

const catMouse = x => x.length - 2 > 3 ? "Escaped!" : "Caught!"