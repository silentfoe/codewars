// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

// my solution: 

function whatCentury(year){
  // need st for ending in 1, nd for ending in 2, rd for ending in 3, and th for all other endings plus years 11 - 19
  // need to check the first 2 indexes of the given year, and the last 2 indexes of the given year to determine the century
  let firstTwoDigits = year.slice(0,2)
  let lastDigits = year.slice(-2)
  let century = ''
  
  if(Number(lastDigits) > 0 && Number(lastDigits) <= 99){
    century += Number(firstTwoDigits) + 1
  }else {
    century += firstTwoDigits
  }

  if(century > '10' && century < '20'){
    return century + 'th'
  }else if(century[1] === '1'){
    return century + 'st'
  }else if(century[1] === '2'){
    return century + 'nd'
  }else if(century[1] === '3'){
    return century + 'rd'
  }else {
    return century + 'th'
  }
}
