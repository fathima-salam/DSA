function reverse(arr,left,right){
    if(left>=right)return arr;
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    return reverse(arr,left+1,right-1);
}
let str="fathima";
let arr=str.split("");
let result=reverse(arr,0,arr.length-1);
console.log(result.join(""));