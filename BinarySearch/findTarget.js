function findTarget(array,target){
    let start = 0;
    let end = array.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(array[mid] === target){
          return mid;
        }else if(target > array[mid]){
            start = mid+1
        }else {
            end = mid-1;
        }
    }
}


let arr = [1,2,3,4,5,6,7];
console.log(findTarget(arr,6))