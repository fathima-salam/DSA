function binarySearch(arr,target){
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
let arr = [1,2,2,2,2,2,2,3,3,4,5,6,6,7];
console.log(binarySearch(arr,3))