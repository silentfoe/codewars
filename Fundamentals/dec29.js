// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.


//first attempt to solve

function combat(health, damage) {
  
    if((health - damage) < 0){
      return 0
    }
    
    return health - damage
  }


  // using ternary operator

  function combat(health, damage) {
  
    return (health - damage) < 0 ? 0 : health - damage;
    
  }


  