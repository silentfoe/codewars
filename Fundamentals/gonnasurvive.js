// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)



//first attempt 

function hero(bullets, dragons){

if( bullets/ 2 >= dragons){
  return true
}
  return false
  
}

//using ternary 

function hero(bullets, dragons){

    //note: I don't need the true:false eval. Can make this cleaner since the statement will return true or false by itself. 
return bullets/2 >= dragons ? true : false;
  
}
