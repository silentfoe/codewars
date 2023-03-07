// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// my final solution: 

function kebabize(str) {
  
    let arr = str
            .split('')
            .filter(char => char.toLowerCase() !== char.toUpperCase())
            .map(char => char === char.toUpperCase() ? `-${char}` : char)
            .join('')
            .toLowerCase()
    
    return arr[0] === '-' ? arr.slice(1) : arr
  }




// my first solution: 

function kebabize(str) {
  
    if(str.toUpperCase() === str){
      return str.split('').join('-').toLowerCase()
    }
    
    let arr = []
    
    for(let i = str.length - 1; i >= 0; i--){
      if(str[i].toLowerCase() === str[i].toUpperCase()){
        arr.unshift()
      }else if(str[i] === str[i].toUpperCase()){
        arr.unshift(`-${str[i]}`)
      }else {
        arr.unshift(str[i])
      }
      
    }
    return arr.join('').toLowerCase()[0] === '-' ? arr.join('').slice(1).toLowerCase() : arr.join('').toLowerCase();
    
  }
  