// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// my solution: 

function defineSuit(card) {
  switch(card.codePointAt(card.length - 1)) {
      case 9824:
        return 'spades'
      case 9827:
        return 'clubs'
      case 9829: 
        return 'hearts'
      case 9830: 
        return 'diamonds'
  }
}


