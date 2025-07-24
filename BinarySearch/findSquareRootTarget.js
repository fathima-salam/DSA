Problem:
// Given a non-negative integer x, find the floor of its square root (i.e., the greatest integer y such that y*y ≤ x) using binary search.

// Example:
// Input: x = 17
// Output: 4 (since 4×4 = 16 and 5×5 = 25)

let arr = [1,2,3,4,5,6,7,8,9];

function squareroot(array,target){
    let start = 0;
    let end = array.length-1;
    let result = -1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if((array[mid] * array[mid]) === target){
            return arr[mid];
        }else if((array[mid] * array[mid]) < target){
            result = array[mid];
            start = mid + 1;
        }else {
            end = mid -1;
        }
    }
    return result;
}
console.log(squareroot(arr,67));

