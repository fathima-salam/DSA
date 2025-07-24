function binarysearch(arr,target){
    let start = 0;
    let end = arr.length-1;
    let first =-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            first = mid;
            end = mid -1;
        }else if(target >arr[mid]){
            start = mid+1;
        }else end =mid -1;
    }
    return first;
}
let arr = [1,2,2,2,2,2,2,3,3,4,5,6,6,7];
console.log(binarysearch(arr,7))