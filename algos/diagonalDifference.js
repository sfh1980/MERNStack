/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3], //                                
    [4, 5, 6], //                               
    [9, 8, 9], //                                 
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) { }




//psudeo code:
//create 2 vars for the 2 diagonals, set to 0
//create indexes (squareMatrix1 has 3 indexes with each index having 3 indexes)
//use idexes to find sums of diagonals


function diagonalDifference(arr) {
    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}