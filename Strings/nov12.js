// Simple, remove the spaces from the string, then return the resultant string.



//First try at working the problem

function noSpace(x){
  
  
    //split at every space and then join everything together with join

    let answer = x.split(' ').join('')
    
        
    return answer
               

}


//refactoring the code for one line

let noSpace = (x) => x.split(' ').join('')


