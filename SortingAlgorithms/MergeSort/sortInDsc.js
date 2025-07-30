function mergesort(arr){
    if(arr.length <= 1) return arr;
    let n = arr.length;
    let mid = Math.floor(n/2);
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
return merge(left,right);
}
function merge(left,right){
    let result = [];
    while (left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return [...result,...left,...right];
}
let array = [8,3,5,4,7,6,1,2];
console.log(mergesort(array));