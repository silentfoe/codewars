// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:

// 365 =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:

// 217 => [2,1,1,0,0,2]

// my solution: 

function giveChange(amount) {
  
  let arr = new Array(6).fill(0)
  
  let hun = Math.floor(amount/100)
  let fifty = Math.floor((amount - (hun * 100)) / 50)
  let twenty = Math.floor((amount - (hun * 100) - (fifty * 50)) / 20)
  let ten = Math.floor((amount - (hun * 100) - (fifty * 50) - (twenty * 20)) / 10)
  let five = Math.floor((amount - (hun * 100) - (fifty * 50) - (twenty * 20) - (ten * 10)) / 5)
  let one = amount - (hun * 100) - (fifty * 50) - (twenty * 20) - (ten * 10) - (five * 5)
  
  arr[5] = hun
  arr[4] = fifty
  arr[3] = twenty
  arr[2] = ten
  arr[1] = five
  arr[0] = one
  
  return arr
  
}