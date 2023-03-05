// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// my solution: 

function nerdify(txt){
  
  return txt.replaceAll('a',4).replaceAll('A',4).replaceAll('e',3).replaceAll('E',3).replaceAll('l',1)
}
