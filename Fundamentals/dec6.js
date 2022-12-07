
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


function cockroachSpeed(s) {
  
    //1km = 100000cm
    //1hr = 3600 seconds
    
    //1km/hr = 10000/3600cm/second
    
    //does not work with 27.78cm/sec, have to do long math. 
    
    return Math.floor(s * (100000/3600))
  }