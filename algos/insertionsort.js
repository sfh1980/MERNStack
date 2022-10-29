/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        let j;
        for(j = i-1; j >= 0 && arr[j] > temp; j--){
            arr[j+1] = arr[j];
        }
        arr[j + 1 ] = temp;
    }
    return arr;
 }

console.log(insertionSort([3, 5, 2, 1, 0]));

console.log(insertionSort([3, 0]));

console.log(insertionSort([0]));

console.log(insertionSort([]));

console.log(insertionSort([1, 2, 3, 4, 5]));

console.log(insertionSort([5, 4, 3, 2, 1]));

console.log(insertionSort([5, 4, 0, 2, 1]));





// //build the function
// const insertionSort = arr => {
//     //for loop looping over each element of array
//     for(let i = 0; i < arr.length; i++){
//         //set variable to hold current value and initialize another variable j and set it outside of next for loop to maintain scoping
//         let temp = arr[i];
//         let j;
//         //now set for loop inside first for loop and assign j value of current array position minus 1 and eval it against if its greather than 0 and if current element is smaller than starting loop element
//         for(j = i-1; j>= 0 && arr[j] > temp; j--){
//             arr[j+1 ] =arr[j];
//         }
//         arr[j + 1] = temp;
//     }
//     return arr;
// };