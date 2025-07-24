function reverse(arr,left,right){
    if(left>=right)return arr;
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    return reverse(arr,left+1,right-1);
}

let arr=[2,3,4,1,4];
console.log(reverse(arr,0,arr.length-1))