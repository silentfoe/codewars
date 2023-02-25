// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.



// my solution: 

function getAverage(marks){
  
  return Math.floor(marks.reduce((prev,curr) => prev + curr,0)/marks.length)
}

// written as one line

const getAverage = marks => Math.floor(marks.reduce((prev,curr) => prev + curr,0)/marks.length);