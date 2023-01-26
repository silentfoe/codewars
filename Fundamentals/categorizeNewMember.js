// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


// my first working solution: 

function openOrSenior(data){
  
    let category = []
    
    let flatArr = data.flatMap(char => char)
    
    for(let i = 0; i < flatArr.length; i += 2){
      if(flatArr[i] > 54 && flatArr[i + 1] > 7){
        category.push("Senior")
      }else{
        category.push("Open")
      }
    }
    
    return category
}

// figured out I don't need to use flatMap and can just use flat method instead

function openOrSenior(data){
  
    let category = []
    
    let flatArr = data.flat()
    
    for(let i = 0; i < flatArr.length; i += 2){
      if(flatArr[i] > 54 && flatArr[i + 1] > 7){
        category.push("Senior")
      }else{
        category.push("Open")
      }
    }
  return category
}