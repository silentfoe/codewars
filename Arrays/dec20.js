// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


//first attempt to solve

function points(games) {
 
    let answer = 0
    
    //this allows me to get an array where every value is individual. It splits ['2:1'] into ['2','1']
    let newArr = games.join(',').split(':').join(',').split(',')
   
    //loop through the array starting at index 0 and going up by 2. This gets me the 'x' value for i and skips the 'y' value when looping through the array.
    for(let i = 0; i < newArr.length; i += 2){
      
    //checking the 'x' value against the 'y' value by comparing the index i to the index at i + 1
      if(newArr[i] > newArr[i + 1]){
        answer += 3
      }else if(newArr[i] === newArr[i + 1]){
        answer += 1
      } else{
        answer += 0
      }
    }
    
    return answer
    
  }