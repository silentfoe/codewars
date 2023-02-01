// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

//not able to show the graph in the problem

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)



//my solution: 

function squareArea(A){
  
    //area of square is length * width (in this case it would be the radius * the radius)
    //area of a circle is pi * r**2 
    //circumference of a circle is pi * diameter
    //length of A is the circumference divided by 4: pi * diameter/4 = A
    //to find the diameter we would need to get it to one side: diameter = (4 * A)/pi
    //to find the radius we divide the diameter by 2: radius = (2 * A)/pi
    //area of the square is: (2 * A)/pi * (2 * A)/pi
    
    return ((2 * A)/Math.PI) * ((2 * A)/Math.PI) 
    
  }
