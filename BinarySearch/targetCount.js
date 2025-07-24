function firstOccurance(arr,target){
    let start = 0;
    let end = arr.length-1;
    let first = -1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]=== target){
            last = mid;
            end = mid-1;
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return last;
}
function lastOccurance(arr,target){
    let start = 0;
    let end = arr.length-1;
    let last = -1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]=== target){
            last = mid;
            start = mid+1;
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return last;
}
function targetCount(array , target){
    let first = firstOccurance(array,target);
    let last = lastOccurance(array , target);
    return last - first +1;
}

let arr = [1,2,2,2,2,2,2,3,3,4,5,6,6,7];
console.log(targetCount(arr,3));