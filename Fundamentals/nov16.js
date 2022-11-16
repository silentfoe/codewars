// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5


//first attempt at solving this


var min = function(list){
    //using the apply method in order to get the values in the array
    return Math.min.apply(null,list)
}

var max = function(list){
    //using the apply method in order to get the values in the array
    return Math.max.apply(null,list)
}


//using the spread operator instead of the apply method. I think this looks better

var min = function(list){
    //spread operator 
    return Math.min(...list)
}

var max = function(list){
    //spread operator 
    return Math.max(...list)
}





