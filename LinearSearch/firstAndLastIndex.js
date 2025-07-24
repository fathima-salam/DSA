function firstAndLastIndex(arr,target){
    let first =-1;
    let last =-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
            if(first === -1){
                first = i;
                last = i;
            }else {
                last =i;
            }
        }
    }
    return {first,last};
}

let arr = [12, 5, 20, 20,8, 15];
console.log(firstAndLastIndex(arr,20));