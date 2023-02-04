// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


// The derivation of formula 
// for 1st row, count is 1; 2nd row, count is 2;... (n-1)th row, count is n-1 
// according to the sum of arithmetic progression, 
// the count before nth row, 1+2+...(n-1) ===> (1+n-1) * (n-1) /2  ===> n * (n-1) / 2 
// start one of nth row is n * (n -1) + 1  ===> n^2 - n +1 
// end one is (start one + 2(n-1)), so it is n^2 + n -1
// according to the sum of arithmetic progression
// the sum of every row is (start + end) * nums /2
// and nums of every row is n.
// ((n^2 - n + 1)+(n^2 + n -1)) * n / 2  ===> n^3


//my solution: 

function rowSumOddNumbers(n) {
	
  return n ** 3
}